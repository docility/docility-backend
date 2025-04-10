export default () => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: "re_FjBzbo5g_5t17J811YN8RbYSdqpLRSQCo", // Required
      },
      settings: {
        defaultFrom: 'DOCILITY <docility@email.docility.com.au>',
        defaultReplyTo: 'andoyandoy5@gmail.com',
      },
    },
  },
});
