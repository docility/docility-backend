/**
 * supplier-management controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::supplier-management.supplier-management', ({ strapi }) => ({
  async find(ctx) {
    // Get the user ID from the JWT token
    const userId = ctx.state.user?.documentId;
    if (!userId) {
      return ctx.unauthorized("User not authenticated.");
    }

    console.log("User ID from JWT:", userId);

    // Find suppliers where the user is the owner/related
    const suppliers = await strapi.entityService.findMany('api::supplier-management.supplier-management', {
      filters: { createBy: userId },
      ...ctx.query,
    });

    return this.transformResponse(suppliers);
  }
}));