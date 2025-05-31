const accountCreation =  (data) => {
  return `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8">
                  <title>Docility ${data.type} Account Created</title>
                </head>
                <body>
                  <h2>Welcome to Docility!</h2>
                  <p>Your company account has been created successfully.</p>
                  <p><strong>Username:</strong> ${data.username}</p>
                  <p><strong>Temporary Password:</strong> ${data.password}</p>
                  <p>Please log in and change your password as soon as possible.</p>
                  <br>
                  <p>Thank you,<br/>Docility Team</p>
                </body>
              </html>
            `;
}

export default accountCreation;