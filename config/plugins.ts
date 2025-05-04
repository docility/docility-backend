export default ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env("EMAIL_API_KEY", ""), // Required
      },
      settings: {
        defaultFrom: 'DOCILITY <docility@email.docility.com.au>',
        defaultReplyTo: 'andoyandoy5@gmail.com',
      },
    },
  },
});
