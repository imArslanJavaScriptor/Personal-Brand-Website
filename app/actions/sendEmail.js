'use server'
import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const projectType = formData.get('projectType');
  const message = formData.get('message');
  const budget = formData.get('budget');

  // Hostinger SMTP Configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "arslan@imarslansaas.com", 
      pass: process.env.EMAIL_PASSWORD, // Add this to your .env file
    },
  });

  const mailOptions = {
    from: `"SaaS Inquiry" <arslan@imarslansaas.com>`,
    to: "arslan@imarslansaas.com",
    replyTo: email,
    subject: `New ${projectType} Lead: ${name} from ${company}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Project Type: ${projectType}
      Budget: ${budget}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false };
  }
}