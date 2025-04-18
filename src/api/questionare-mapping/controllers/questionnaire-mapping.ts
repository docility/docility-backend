

import { v4 as uuidv4 } from 'uuid'
import emitMessageToClient from "../../utils/socket"

export default {
  send: async (ctx, next) => {
    const userId = ctx.headers['userid']
    console.log('userId', userId)
    console.log('ctx.request.body', ctx.request.body)

    try {
      try {
        const questionnaireData = ctx.request.body

        console.log(questionnaireData)
        // Ensure the data is an array

        let url = uuidv4()
        const result = await strapi.entityService
          .create('api::company-questionnaire.company-questionnaire', {
            data: {
              ...questionnaireData.data,
              status: 'Pending',
              url: url,
              publishedAt: new Date(), // Set the publishedAt field to publish the content
            },
          })
          .catch((err) => {
            console.error('Error creating Company:', err)
          })
        var companyDetails
        try {
          if (questionnaireData.data.type == 'COMPANY') {
            companyDetails = await strapi.entityService.findMany('api::company.company', {
              filters: {
                id: questionnaireData.data.company_id,
              },
              pagination: { limit: 1 }, // Ensure only one result is returned
            })
          } else {
            companyDetails = await strapi.entityService.findMany('api::supplier.supplier', {
              filters: {
                id: questionnaireData.data.supplier_id,
              },
              pagination: { limit: 1 }, // Ensure only one result is returned
            })
          }
        } catch (error) {
          console.log(error)
        }

        console.log('result', result)
        ctx.body = {
          message: 'The process is running in the background.',
        }
        emitMessageToClient((strapi as any).io, parseInt(userId), 'message', {
          type: 'info',
          message: 'Company successfully saved!',
        })
        console.log('send socket')
        console.log('company result', companyDetails)
        const email = await strapi.plugins['email'].services.email.send({
          to:
            questionnaireData.data.type === 'COMPANY'
              ? companyDetails[0].email
              : companyDetails[0].support_person_email,
          subject: 'Docility Questionnaire',
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
                    <h2>Hello, ${
                      questionnaireData.data.type === 'COMPANY'
                        ? companyDetails[0].name
                        : companyDetails[0].supplier_name
                    } !</h2>
                    <p>We appreciate your time and invite you to complete our questionnaire. Your feedback is valuable to us.</p>
                    <p>Click the button below to access the questionnaire:</p>
                    <a href="https://docility.com.au/assessment/${url}" class="button">Start Questionnaire</a>
                    <p>If the button doesn't work, copy and paste this link into your browser:</p>
                    <a href="https://docility.com.au/assessment/${url}">https://docility.com.au/assessment/${url}</a>
                    <div class="footer">
                      <p>Docility. All rights reserved.</p>
                    </div>
                  </div>
                </body>
                </html>
          `,
        })

        console.log('Email sent successfully!', email)
      } catch (error) {
        console.log(error)
      }
    } catch (err) {
      ctx.body = err
      console.log(err)
    }
  },
  search: async (ctx, next) => {
    const userId = ctx.headers['userid']

    const searchQuery = ctx.request.query.id
    try {
      const result = await strapi.entityService.findMany(
        'api::company-questionnaire.company-questionnaire',
        {
          filters: {
            url: searchQuery,
          },
          pagination: { limit: 1 }, // Ensure only one result is returned
        }
      )
      var company
      // Ensure at least one result exists
      if (result.length > 0) {
        const questionnaireId = result[0].id

        const existingCompany = await strapi.entityService.findOne(
          'api::company-questionnaire.company-questionnaire',
          questionnaireId,
          { fields: ['status'] } // Retrieve only the status field
        )

        // Check if status is not "Completed"
        if (existingCompany && existingCompany.status === 'completed') {
          return ctx.send({
            message: 'completed',
            questionnaireStatus: 'completed',
            is_success: 'true',
          })
        }

        company = await strapi.entityService.update(
          'api::company-questionnaire.company-questionnaire',
          questionnaireId,
          {
            data: {
              status: 'in-progress', // Update only if status is not "Completed"
            },
          }
        )

        console.log('Update successful:')
      } else {
        console.log('No matching questionnaire found for URL:', searchQuery)
      }

      console.log('result', result)
      console.log('compay', company)

      const questionnaire = await strapi.entityService.findMany(
        'api::questionnaire.questionnaire',
        {
          filters: {
            id: company.questionnaire_id,
          },
          pagination: { limit: 1 }, // Ensure only one result is returned
        }
      )

      console.log(company)

      const questions = await strapi.entityService.findMany('api::question.question', {
        filters: {
          questionnaires_id: company.questionnaire_id,
        },
      })

      var companyDetails
      // Get the first result if available
      if (questionnaire[0].type === 'Company') {
        companyDetails = await strapi.entityService.findMany('api::company.company', {
          filters: {
            id: company.company_id,
          },
          pagination: { limit: 1 }, // Ensure only one result is returned
        })
      } else {
        companyDetails = await strapi.entityService.findMany('api::supplier.supplier', {
          filters: {
            id: result[0].supplier_id,
          },
          pagination: { limit: 1 }, // Ensure only one result is returned
        })
      }

      console.log('Company:', questions)
      ctx.body = {
        data: {
          company_questionnaire: company,
          company_details: companyDetails,
          questions,
          questionnaire,
        },
        is_success: true,
      }
    } catch (err) {
      ctx.body = {
        data: null,
        is_success: false,
      }
      console.log(err)
    }
  },
}
