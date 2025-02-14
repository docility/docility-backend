module.exports = {
  routes: [
    {
      method: "POST",
      path: "/questionnaire-mapping/send",
      handler: "questionnaire-mapping.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/questionnaire-mapping",
      handler: "questionnaire-mapping.search",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
