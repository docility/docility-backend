'use strict';

/**
 * customer-management controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::customer-management.customer-management');
