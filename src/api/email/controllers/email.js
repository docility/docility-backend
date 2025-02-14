module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const res = await strapi
        .service("api::email.email")
        .emailService(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
