import { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
});

function middleWare(req: NextApiRequest, res: NextApiResponse, fn) {
  return new Promise((resolve, rej) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return rej(result);
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

      console.log(body);

      if (!body.name || !body.email || !body.text) return;

      const mail: MailOptions = {
        from: body.email,
        to: process.env.EXTRA_EMAIL,
        subject: `New email from ${body.name}`,
        text: body.text,
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
      return res.json({ error: "Method not allowed", status: "error" });
    }
  }
}
