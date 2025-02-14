module.exports = () => ({})
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('EMAIL_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'DOCILITY <onboarding@resend.dev>',
        defaultReplyTo: 'andoyandoy5@gmail.com',
      },
    },
  },
})
