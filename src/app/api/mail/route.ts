import mail from "@sendgrid/mail";
import { CONTACT_SCHEMA } from "lib/schemas";
import { rateLimit } from "./rate-limiter";

if (!process.env.MAIL_API_KEY) {
  throw new Error("`MAIL_API_KEY` is not defined");
}

const limiter = rateLimit({
  interval: 15 * 60 * 1000,
});
const MAX_EMAILS_PER_FIFTEEN_MINUTES = 2;

mail.setApiKey(process.env.MAIL_API_KEY);

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;

  if (!process.env.CACHE_TOKEN) {
    throw new Error("`CACHE_TOKEN` is not defined");
  }

  const { isRateLimited, headers } = limiter.check(
    MAX_EMAILS_PER_FIFTEEN_MINUTES,
    process.env.CACHE_TOKEN,
  );

  if (isRateLimited) {
    return new Response(JSON.stringify({ error: "Rate limited exceeded" }), {
      status: 429,
      headers,
    });
  }

  const data = await CONTACT_SCHEMA.safeParseAsync(body);
  if (!data.success) {
    return new Response(JSON.stringify({ error: data.error.message }), {
      status: 400,
      headers,
    });
  }

  const msg = {
    to: [process.env.MAIL_CC_EMAIL!, { name: data.data.name, email: data.data.email }],
    from: process.env.MAIL_VERIFIED_SENDER!,
    subject: "RE: Confirmation email caspertheghost.me",
    text: `
Hello ${data.data.name},

You received this email because you entered the contact form on caspertheghost.me.
I will respond back to you as soon as I can :). Below you can find your message:


${data.data.message}`,
    html: `
Hello ${data.data.name},<br/>
<br/>
You received this email because you entered the contact form on caspertheghost.me.<br/>
I will respond back to you as soon as I can :). Below you can find your message:

<br/>
<br/>

<q>${data.data.message}</q>`,
  };

  const sentEmail = await mail.send(msg).catch(() => null);

  if (!sentEmail) {
    return new Response(JSON.stringify({ error: "could not send email" }), {
      status: 500,
      headers,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers,
  });
}
