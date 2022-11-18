'use strict';

/**
 * prices-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prices-table.prices-table');
