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
       console.log("Temporary password generated:", password)
        // const userData = {
        //   username: response.data.username,
        //   email: response.data.email,
        //   password,
        //   type: "type",
        //   publishedAt: new Date(),
        //   role: role?.id,
        //   confirmed: true,
        // };

        const userData = {
  username: response.data.username,
  email: response.data.email,
  password,
  role: role?.id,
  confirmed: true,
  provider: "local",
};

        // Create associated user
        // const user = await strapi.entityService.create(
        //   "plugin::users-permissions.user",
        //   { data: userData }
        // );

        const user = await strapi
  .plugin('users-permissions')
  .service('user')
  .add(userData);

        if (!user) {
          ctx.throw(500, "Failed to create associated user account.");
        }

        console.log("User created:", user);

        // Send email
        try {
          const emailResult = await strapi.plugins["email"].services.email.send({
            to: user.email,
            subject: "Docility Company Account Creation",
            html: accountCreation({username: user.username, password, type: "Company"}),
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
    async delete(ctx) {
      try {
        const { id } = ctx.params;

        if (!id) {
          return ctx.badRequest("Company ID is required.");
        }

        console.log("Deleting company with documentId:", id);

        // Find the company by documentId field
        const company = await strapi.db.query("api::company.company").findOne({
          where: { documentId: id }
        });

        if (!company) {
          return ctx.notFound("Company not found.");
        }

        // Delete associated user based on email/username
        const user = await strapi.db.query("plugin::users-permissions.user").findOne({
          where: {
            $or: [
              { email: company.email },
              { username: company.username }
            ]
          }
        });

        if (user) {
          await strapi.entityService.delete("plugin::users-permissions.user", user.id);
          console.log("Associated user deleted:", user.email || user.username);
        }

        // Delete the company by its internal id
        await strapi.entityService.delete("api::company.company", company.id);

        return { message: "Company and associated user deleted successfully." };
      } catch (err) {
        console.error("Unhandled error in company delete:", err);
        return ctx.internalServerError("An unexpected error occurred.");
      }
    },
  })
);
