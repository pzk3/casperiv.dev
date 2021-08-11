import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env["SEND_GRID_API_KEY"]);

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

      const mail: sgMail.MailDataRequired = {
        to: process.env["TO_EMAIL"],
        from: process.env["TO_EMAIL"],
        subject: `New email from ${body.name}`,
        html: `
Email from: <strong>${body.email}</strong>:

<br />
<br />

${body.text}`,
        cc: body.email,
      };

      try {
        await sgMail.send(mail);

        return res.json({ status: "success" });
      } catch (e) {
        console.log(e);

        return res.json({
          status: "error",
          error: "An unexpected error occurred. Please try again later.",
        });
      }
    }
    default: {
      return res.redirect("/404");
    }
  }
}
