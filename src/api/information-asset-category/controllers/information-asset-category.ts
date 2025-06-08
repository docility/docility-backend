'use strict'

/**
 * information-asset-category controller
 */


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::information-asset-category.information-asset-category', ({ strapi }) => ({
   async find(ctx) {
      // Get the user ID from the JWT token
      console.log("Finding control assessments for user...");
      console.log("Context user:", ctx.state.user);
      const userId = ctx.state.user?.documentId;
      const user = ctx.state.user;
      console.log("User ID from JWT:", userId);
      if (!userId) {
        return ctx.unauthorized("User not authenticated.");
      }

      console.log("User ID from JWT:", userId);

      // Find suppliers where the user is the owner/related
      var suppliers = [];
 
      if (user.role.name === "Authenticated") {
        suppliers = await strapi.entityService.findMany(
          "api::information-asset-category.information-asset-category",
          {
            ...ctx.query,
          }
        );
      } else {
        suppliers = await strapi.entityService.findMany(
          "api::information-asset-category.information-asset-category",
          {
            filters: { createBy: userId },
            ...ctx.query,
          }
        );
      }

      return this.transformResponse(suppliers);
    },
  async create(ctx) {
    // Get the user ID from the JWT token
    const userId = ctx.state.user?.documentId;
    console.log("User ID from JWT:", userId);
    if (!userId) {
      return ctx.unauthorized("User not authenticated.");
    }
 
    if (!ctx.request.body.data) ctx.request.body.data = {};
    ctx.request.body.data.createBy = userId; 
 
    return await super.create(ctx);
  },
}));