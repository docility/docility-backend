"use strict";

/**
 * company controller
 */
import { factories } from "@strapi/strapi";
import generateTempPassword from "../../utils/passwordGenerator";
import accountCreation from "../../utils/emailTemplate/accountCreation";

export default factories.createCoreController(
  "api::company.company",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const { data } = ctx.request.body;

        // Validate request body
        if (!data?.username || !data?.email) {
          return ctx.badRequest("Username and email are required.");
        }

        console.log("Incoming company data:", data);

        // Check if user already exists
        const existingUser = await strapi.db
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              $or: [{ username: data.username }, { email: data.email }],
            },
          });

        if (existingUser) {
          return ctx.badRequest("Username or email already exists.");
        }

        // Call default core create logic
        const response = await super.create(ctx);

        if (!response || !response.data?.email || !response.data?.username) {
          ctx.throw(500, "Failed to create company or invalid response.");
        }

        console.log("Company created:", response.data);
        console.log("Creating associated user...");
        // Get the role
        const role = await strapi
          .query("plugin::users-permissions.role")
          .findOne({ where: { name: "SystemOwner" } });
        console.log("Role fetched:", role);
        console.log("role found:", role);
        console.log("Generating temporary password...");
        const password = generateTempPassword();
       
        const userData = {
          username: response.data.username,
          email: response.data.email,
          password,
          type: "type",
          publishedAt: new Date(),
          role: role?.id,
        };

        // Create associated user
        const user = await strapi.entityService.create(
          "plugin::users-permissions.user",
          { data: userData }
        );

        if (!user) {
          ctx.throw(500, "Failed to create associated user account.");
        }

        console.log("User created:", user);

        // Send email
        try {
          const emailResult = await strapi.plugins["email"].services.email.send({
            to: user.email,
            subject: "Docility Company Account Creation",
            html: accountCreation(userData),
          });

          console.log("Email sent successfully:", emailResult);
        } catch (emailErr) {
          console.error("Error sending email:", emailErr);
          // Optional: notify the frontend but still return success
        }

        return response;
      } catch (err) {
        console.error("Unhandled error in company create:", err);
        return ctx.internalServerError("An unexpected error occurred.");
      }
    },
  })
);
