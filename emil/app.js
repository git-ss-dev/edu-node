const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)
sgMail.send({
  to: 'shivam.shrivastava@edureka.co',
  from: 'manprith.singh@edureka.co',
  subject: 'Hii Manprit',
  text: 'How much module have u completed?',
  html: '<strong>How much module have u completed?</strong>',
})