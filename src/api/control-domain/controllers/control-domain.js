'use strict'

/**
 * control-domain controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::control-domain.control-domain')
