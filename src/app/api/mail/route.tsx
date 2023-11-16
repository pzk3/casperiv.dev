import { CONTACT_SCHEMA } from "~/lib/schemas";
import { rateLimit } from "./rate-limiter";
import { env } from "~/env.mjs";
import { Resend } from "resend";
import { EmailTemplate } from "./email";

export const runtime = "edge";

const MAIL_VERIFIED_SENDER = env.MAIL_VERIFIED_SENDER;

const limiter = rateLimit({
  interval: 15 * 60 * 1000,
});
const MAX_EMAILS_PER_FIFTEEN_MINUTES = 2;

const resend = new Resend(env.RESEND_API_TOKEN);

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

  try {
    const { data: result, error } = await resend.emails.send({
      to: [
        `${data.data.firstName} ${data.data.lastName} <${data.data.email}>`,
        `Casper Iversen <${MAIL_VERIFIED_SENDER}>`,
      ],
      from: `Casper Iversen <${MAIL_VERIFIED_SENDER}>`,
      subject: `Confirmation of ${data.data.firstName} ${data.data.lastName}'s message`,
      react: <EmailTemplate {...data.data} />,
    });

    if (error || !result?.id) {
      throw new Error(error?.message ?? "could not send email");
    }

    return new Response(
      JSON.stringify({
        message: "Message successfully sent! You should receive a confirmation email.",
      }),
      { status: 200, headers },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "could not send email" }), {
      status: 500,
      headers,
    });
  }
}
