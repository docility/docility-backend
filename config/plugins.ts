export default () => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: "", // Required
      },
      settings: {
        defaultFrom: 'DOCILITY <docility@email.docility.com.au>',
        defaultReplyTo: 'andoyandoy5@gmail.com',
      },
    },
  },
});
