'use strict';

module.exports = {
  // Bulk create categories
  riskCategories: async (ctx) => {
    try {
      const categoriesData = ctx.request.body; // Array of category data
      console.log(categoriesData);

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data');
      }

      // Fire-and-forget: Create records in the background
      categoriesData.forEach(data => {
        strapi.entityService.create('api::risk-category.risk-category', {
          data: {
            ...data,
            publishedAt: new Date(), // Set the publishedAt field to publish the content
          },
        }).catch(err => {
          console.error('Error creating category:', err);
        }); // Catch individual errors without affecting others
      });

      // Immediately respond with a success message
      ctx.body = {
        message: 'Categories creation has been initiated. The process is running in the background.',
      };
    } catch (error) {
      // Handle error
      console.error(error);
      ctx.body = { message: 'Error occurred during bulk creation', error };
      ctx.status = 500;
    }
  },
};
