export default {
  exampleAction: async (ctx, next) => {
    try {
      const res = await strapi.service('api::email.email').emailService(ctx)
      ctx.body = res.message
      console.log(res)
    } catch (err) {
      ctx.body = err
    }
  },
}

