import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import nodeMailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
});

function middleWare(req: NextApiRequest, res: NextApiResponse, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void | NextApiResponse> {
  const { method } = req;
  const transporter = nodeMailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  switch (method) {
    case "POST": {
      await middleWare(req, res, limiter);
      const body = JSON.parse(req.body);

      if (!body.name || !body.email || !body.text) {
        return res.json({
          error: "Please fill in all fields",
          status: "error",
          required_fields: ["name", "email", "text"],
        });
      }

      const mail: MailOptions = {
        from: body.email,
        to: process.env.EXTRA_EMAIL,
        subject: `New email from ${body.name}`,
        text: `
Email from: ${body.email}:

${body.text}`,
        cc: process.env.EXTRA_EMAIL,
      };

      transporter.sendMail(mail, (err) => {
        if (err) {
          console.log(err);
          return res.json({ error: "An error occurred when sending the email" });
        }

        return res.json({ status: "success" });
      });
      return;
    }
    default: {
      return res.redirect("/404");
    }
  }
}
