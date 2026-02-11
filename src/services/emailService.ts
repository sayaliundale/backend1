//const nodemailer = require("nodemailer");
import { createTransport } from "nodemailer";
import env from "../config/env";

const transporter = createTransport({
  service: env.EMAIL_SERVICE, // gmail
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

const sendMail = async ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) => {
  await transporter.sendMail({
    from: `"Website Contact" <${env.EMAIL_FROM}>`,
    to: env.EMAIL_TO,
    subject: subject,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
};

export { sendMail };
