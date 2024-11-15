// ./src/api/category/config/routes.json
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/create-bulk/risk-categories',
      handler: 'create-bulk.riskCategories',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/asset-categories',
      handler: 'create-bulk.assetCategories',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
