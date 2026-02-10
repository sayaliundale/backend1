const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async ({ name, email, subject, message }) => {
  await transporter.sendMail({
    from:`"Website Contact" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
};

module.exports = { sendMail };
