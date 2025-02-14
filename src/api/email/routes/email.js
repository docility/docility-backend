module.exports = {
  routes: [
    {
      method: "POST",
      path: "/email/exampleAction",
      handler: "email.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
