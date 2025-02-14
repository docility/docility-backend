module.exports = ({ strapi }) => ({
  emailService: async (ctx) => {
    try {
      const input = ctx.request.body.data?.input;
      const emailTo = ctx.request.body.data?.emailTo;

      console.log(ctx.request.body)

      await strapi.plugins["email"].services.email.send({
        from: "no-reply@resend.dev",
        to: emailTo,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      return {
        message: "Email sent!",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
});
