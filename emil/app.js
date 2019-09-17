const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = 'API Key'
sgMail.setApiKey(sendgridAPIKey)
sgMail.send({
  to: 'shivam.shrivastava@edureka.co',
  from: 'manprith.singh@edureka.co',
  subject: 'Hii Manprit',
  text: 'How much module have u completed?',
  html: '<strong>How much module have u completed?</strong>',
})
