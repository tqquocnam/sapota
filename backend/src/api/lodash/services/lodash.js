'use strict';

/**
 * lodash service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lodash.lodash');
