'use strict';

/**
 * feedeback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feedeback.feedeback');
