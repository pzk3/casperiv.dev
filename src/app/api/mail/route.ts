import mail from "@sendgrid/mail";
import { CONTACT_SCHEMA } from "~/lib/schemas";
import { rateLimit } from "./rate-limiter";
import { env } from "~/env.mjs";

const MAIL_VERIFIED_SENDER = env.MAIL_VERIFIED_SENDER;
const MAIL_API_KEY = env.MAIL_API_KEY;

const limiter = rateLimit({
  interval: 15 * 60 * 1000,
});
const MAX_EMAILS_PER_FIFTEEN_MINUTES = 2;

mail.setApiKey(MAIL_API_KEY);

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;

  const { isRateLimited, headers } = limiter.check(MAX_EMAILS_PER_FIFTEEN_MINUTES, env.CACHE_TOKEN);

  if (isRateLimited) {
    return new Response(
      JSON.stringify({
        message: "Woah! You're moving too fast. Please try again in several minutes.",
      }),
      { status: 429, headers },
    );
  }

  const data = await CONTACT_SCHEMA.safeParseAsync(body);
  if (!data.success) {
    return new Response(JSON.stringify({ message: data.error.message }), {
      status: 400,
      headers,
    });
  }

  const msg = {
    to: [
      { name: `${data.data.firstName} ${data.data.lastName}`, email: data.data.email },
      { name: "Casper Iversen", email: MAIL_VERIFIED_SENDER },
    ],
    from: { name: "Casper Iversen", email: MAIL_VERIFIED_SENDER },
    subject: `Confirmation of ${data.data.firstName} ${data.data.lastName}'s message`,
    text: `
Hello ${data.data.firstName},

Thank you for taking the time to contact me. This email is to confirm that I have received your message and will respond back to you as soon as I can.

I will be replying to the email address you provided me: ${data.data.email}

Have a great day!
Kind regards,
Casper

---

Your message:

${data.data.message}`,
    html: `
Hello ${data.data.firstName},<br/>
<br/>
Thank you for taking the time to contact me. This email is to confirm that I have received your message and will respond back to you as soon as I can.
<br/>
<br/>
I will be replying to the email address you provided me: ${data.data.email}

<br/>
<br/>

Have a great day!<br/>
Kind regards,<br/>
Casper<br/>
<br/>
<br/>
——
<br/>
<br/>
Your message:
<br/>
<br/>
<q>${data.data.message}</q>`,
  };

  const sentEmail = await mail.send(msg).catch(() => null);
  if (!sentEmail) {
    return new Response(JSON.stringify({ message: "could not send email" }), {
      status: 500,
      headers,
    });
  }

  return new Response(
    JSON.stringify({
      message: "Message successfully sent! You should receive a confirmation email.",
    }),
    { status: 200, headers },
  );
}
