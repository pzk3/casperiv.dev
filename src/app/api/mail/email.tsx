import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import type { z } from "zod";
import { CONTACT_SCHEMA } from "~/lib/schemas";

export function EmailTemplate(props: z.infer<typeof CONTACT_SCHEMA>) {
  return (
    <Html>
      <Head />

      <Preview>Confirmation of {`${props.firstName} ${props.lastName}'s`} message</Preview>

      <Body
        style={{
          fontFamily:
            // eslint-disable-next-line quotes
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}
      >
        <Container style={{ fontSize: 16 }}>
          <Text style={{ paddingBottom: 8 }}>Hello {props.firstName}</Text>

          <Text>
            Thank you for taking the time to contact me. This email is to confirm that I have
            received your message and will respond back to you as soon as I can (Usually within 48
            hours).
          </Text>

          <Text>I will be replying to the email address you provided me: {props.email}.</Text>

          <Text style={{ paddingTop: 8 }}>
            Have a great day! <br />
            Kind regards,
            <br />
            Casper
            <br />
          </Text>

          <Hr />

          <Section>
            <Heading style={{ fontSize: 16 }} as="h5">
              Your message
            </Heading>

            <Text>{props.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
