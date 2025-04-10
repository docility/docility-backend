// ./src/api/category/config/routes.json
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/create-bulk/risk-categories',
      handler: 'create-bulk.riskCategories',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/asset-categories',
      handler: 'create-bulk.assetCategories',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/assessment-controls',
      handler: 'create-bulk.assessmentControl',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/risk-treatment',
      handler: 'create-bulk.riskTreatment',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/risks',
      handler: 'create-bulk.createRisk',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/supplier',
      handler: 'create-bulk.createSupplier',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/customers',
      handler: 'create-bulk.createCustomers',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/companies',
      handler: 'create-bulk.createCompany',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create-bulk/submitAnswer',
      handler: 'create-bulk.submitAnswer',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
