'use strict'
const jwt = require('jsonwebtoken')
// Import the utility function for emitting messages
const emitMessageToClient = require('../../utils/socket')

module.exports = {
  // Bulk create categories
  riskCategories: async (ctx) => {
    const userId = ctx.headers['userid']
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const categoriesData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message:
          'Categories creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const categoryPromises = categoriesData.map((data) => {
            return strapi.entityService
              .create('api::risk-category.risk-category', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating category:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(categoryPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Categories successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during category creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  assetCategories: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const categoriesData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message:
          'Categories creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const categoryPromises = categoriesData.map((data) => {
            return strapi.entityService
              .create('api::information-asset-category.information-asset-category', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating category:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(categoryPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Asset Categories successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during category creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  assessmentControl: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const categoriesData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message:
          'Categories creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const categoryPromises = categoriesData.map((data) => {
            return strapi.entityService
              .create('api::control-assessment.control-assessment', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating category:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(categoryPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Assessment Controls successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during category creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  riskTreatment: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const categoriesData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message:
          'Categories creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const categoryPromises = categoriesData.map((data) => {
            return strapi.entityService
              .create('api::risk-treatment.risk-treatment', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating category:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(categoryPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Risk Treatments successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during category creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  createRisk: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const categoriesData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(categoriesData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message:
          'Categories creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const categoryPromises = categoriesData.map((data) => {
            return strapi.entityService
              .create('api::risk.risk', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating category:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(categoryPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Risk Treatments successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during category creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  createSupplier: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const SupplierData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(SupplierData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message: 'Supplier creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const SupplierPromises = SupplierData.map((data) => {
            return strapi.entityService
              .create('api::supplier.supplier', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating Supplier:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(SupplierPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Suppliers successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during Supplier creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  createCustomers: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const SupplierData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(SupplierData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message: 'Customers creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const SupplierPromises = SupplierData.map((data) => {
            return strapi.entityService
              .create('api::customer-management.customer-management', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating Customers:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(SupplierPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Customers successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during Customers creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  createCompany: async (ctx) => {
    const userId = ctx.headers['userid']

    console.log(ctx.headers)
    if (!userId) {
      return ctx.unauthorized('userId header is missing')
    }

    try {
      const SupplierData = ctx.request.body // Array of category data

      // Ensure the data is an array
      if (!Array.isArray(SupplierData)) {
        return ctx.badRequest('Expected an array of category data')
      }

      // Immediately respond with a success message (without waiting for the creation process)
      ctx.body = {
        message: 'Company creation has been initiated. The process is running in the background.',
      }

      // Create categories asynchronously without blocking the response
      setImmediate(async () => {
        try {
          const SupplierPromises = SupplierData.map((data) => {
            return strapi.entityService
              .create('api::company.company', {
                data: {
                  ...data,
                  publishedAt: new Date(), // Set the publishedAt field to publish the content
                },
              })
              .catch((err) => {
                console.error('Error creating Company:', err)
              })
          })
          console.log('start promise')
          // Wait for all category creation promises to resolve
          await Promise.all(SupplierPromises)
          console.log('end promise')
          // Emit the message to the client once all categories are created
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'info',
            message: 'Company successfully saved!',
          })
          console.log('send socket')
        } catch (error) {
          console.error('Error during Company creation:', error)
          // Emit the error message to the client if something goes wrong
          emitMessageToClient(strapi.io, parseInt(userId), 'message', {
            type: 'error',
            message: 'Error occurred during bulk creation, Please Try Again!',
          })
        }
      })
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error)

      // Emit the error message to the client if something goes wrong
      setImmediate(() => {
        emitMessageToClient(strapi.io, parseInt(userId), 'message', {
          type: 'error',
          message: 'Error occurred during bulk creation, Please Try Again!',
        })
      })

      // Send error response
      ctx.body = { message: 'Error occurred during bulk creation', error }
      ctx.status = 500
    }
  },
  submitAnswer: async (ctx) => {
    try {
      const answerData = ctx.request.body.data // Array of category data
      const url = ctx.request.body.url
      // Ensure the data is an array
      if (!Array.isArray(answerData)) {
        return ctx.badRequest('Expected an array of answer data')
      }

      console.log('Start processing answers')

      // Process all answers and wait for them to complete
      const answerDataPromises = answerData.map(async (data) => {
        try {
          return await strapi.entityService.create(
            'api::questionnaire-answer.questionnaire-answer',
            {
              data: {
                ...data,
                publishedAt: new Date(), // Set the publishedAt field to publish the content
              },
            }
          )
        } catch (err) {
          console.error('Error creating Answer:', err)
          return null
        }
      })

      const companyQuestionnaire = await strapi.entityService.findMany(
        'api::company-questionnaire.company-questionnaire',
        {
          filters: {
            url: url, // Update only the desired field
          },
        }
      )

      console.log('questionnaire_id', companyQuestionnaire)

      const update = await strapi.entityService.update(
        'api::company-questionnaire.company-questionnaire',
        companyQuestionnaire[0].id, // Use extracted ID
        {
          data: {
            status: 'completed', // Update only the desired field
          },
        }
      )
      console.log('update questionnaire', update)

      // Wait for all answers to be created before responding
      const results = await Promise.all(answerDataPromises)

      console.log('Finished processing answers')

      // Filter out failed entries (if any)
      const successfulResults = results.filter((res) => res !== null)

      return ctx.send({
        message: 'All answers have been processed successfully.',
        is_success: successfulResults.length === answerData.length, // true if all succeeded
        created_count: successfulResults.length,
        failed_count: answerData.length - successfulResults.length,
      })
    } catch (error) {
      console.error('Error during answer creation:', error)
      return ctx.internalServerError('Error occurred during bulk creation')
    }
  },
}
