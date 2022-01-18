import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Contact api end point
 *
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
export default function async(req: NextApiRequest, res: NextApiResponse) {
  const { name, message } = req.body;

  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_AUTH_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_AUTH_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const options = {
      from: `Enquiries Form rob@reachdigital.co.uk`,
      to: "rob@reachmarketing.co.uk",
      subject: `Enquiries form submission from ${name}`,
      text: `The Message is: ${message}`,
    };

    transporter.sendMail(options).then((result) => console.log(result));

    res.status(200).json({
      message: "Thank your for your message",
    });
  } catch (error) {
    res.status(400);
  }
}
