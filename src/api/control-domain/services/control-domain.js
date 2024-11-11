'use strict';

/**
 * control-domain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::control-domain.control-domain');
