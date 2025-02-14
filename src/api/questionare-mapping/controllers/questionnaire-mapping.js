const emitMessageToClient = require("../../utils/socket");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  send: async (ctx, next) => {
    const userId = ctx.headers["userid"];

    try {
      try {
        const questionnaireData = ctx.request.body;

        console.log(questionnaireData);
        // Ensure the data is an array
         
        let url = uuidv4();
        const result = strapi.entityService
          .create("api::company-questionnaire.company-questionnaire", {
            data: {
              ...questionnaireData.data,
              url: url,
              publishedAt: new Date(), // Set the publishedAt field to publish the content
            },
          })
          .catch((err) => {
            console.error("Error creating Company:", err);
          });

          console.log("result", result)
        ctx.body = {
          message:
            "The process is running in the background.",
        };
        emitMessageToClient(strapi.io, parseInt(userId), "message", {
          type: "info",
          message: "Company successfully saved!",
        });
        console.log("send socket");

        await strapi.plugins["email"].services.email.send({
          to: "andoyandoy5@gmail.com",
          subject: "Docility Questionnaire",
          html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Your Questionnaire</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      margin: auto;
    }
    h2 {
      color: #333;
    }
    p {
      color: #555;
      font-size: 16px;
      line-height: 1.5;
    }
    .button {
      display: inline-block;
      background-color: #007bff;
      color: #ffffff;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #0056b3;
    }
    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hello, ${url} !</h2>
    <p>We appreciate your time and invite you to complete our questionnaire. Your feedback is valuable to us.</p>
    <p>Click the button below to access the questionnaire:</p>
    <a href="https://docility/assessment/${url}" class="button">Start Questionnaire</a>
    <p>If the button doesn't work, copy and paste this link into your browser:</p>
    <p>{QUESTIONNAIRE_LINK}</p>
    <div class="footer">
      <p>&copy; ${url}  Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`,
        });
      } catch (error) {
        console.log(error);
      }
    } catch (err) {
      ctx.body = err;
      console.log(err)
    }
  },
   search: async (ctx, next) => {
    const userId = ctx.headers["userid"];

    const searchQuery = ctx.request.query.id;
    try {
     const result = await strapi.entityService.findMany(
       "api::company-questionnaire.company-questionnaire",
       {
         filters: {
           url: searchQuery,
         },
         pagination: { limit: 1 }, // Ensure only one result is returned
       }
     );
     const company = result[0] || null; // Get the first result if available

     const questionnaire = await strapi.entityService.findMany(
       "api::questionnaire.questionnaire",
       {
         filters: {
           id: company.questionnaire_id,
         },
         pagination: { limit: 1 }, // Ensure only one result is returned
       }
     );

     const questions = await strapi.entityService.findMany(
       "api::question.question",
       {
         filters: {
           questionnaires_id: questionnaire.id,
         },
       }
     );

     console.log("Company:", company);
      ctx.body = {
        data: { 
          company,
          questions,
          questionnaire,
        },
        is_success: true,
      };
    } catch (err) {
      ctx.body = {
        data: null,
        is_success: false,
      };
       console.log(err);
    }
  },
};
