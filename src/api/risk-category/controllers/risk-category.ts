'use strict'

/**
 * risk-category controller
 */

 
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::risk-category.risk-category', ({ strapi }) => ({
  async find(ctx) {
    // Get the user ID from the JWT token
    const userId = ctx.state.user?.documentId;
    if (!userId) {
      return ctx.unauthorized("User not authenticated.");
    }

    console.log("User ID from JWT:", userId);

    // Find suppliers where the user is the owner/related
    const suppliers = await strapi.entityService.findMany('api::risk-category.risk-category', {
      filters: { createBy: userId },
      ...ctx.query,
    });

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