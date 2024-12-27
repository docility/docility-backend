'use strict';

/**
 * customer-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-management.customer-management');
