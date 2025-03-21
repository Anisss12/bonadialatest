import nodeMailer from "nodemailer";

export async function sendEmail({ username, email, emailType }) {
  try {
    console.log("Sending email to:", email);
    console.log("Email type:", emailType);

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodeMailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "72428c1792cd43",
        pass: "1676e9aaf216bc",
      },
    });

    const mailOptions = {
      from: "m.for.minara@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      text: `Hello ${username},`,
      html: `<b>Hello ${username},</b>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(error.message);
  }
}
