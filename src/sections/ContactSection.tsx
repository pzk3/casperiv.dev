import * as React from "react";
import { useWindowEvent } from "@casper124578/useful/hooks/useWindowEvent";
import ContactModal from "@components/ContactModal";
import styles from "css/contact.module.scss";
import { classes } from "src/lib/classes";

const Messages = {
  Success: "Successfully sent your message my way! I should respond soon.",
  RateLimit: "Too many requests, please slow wait 15 more minutes before sending a new mail",
};

const ContactSection: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<{ title: string; body: string }>(null);
  const ref = React.useRef<HTMLInputElement>(null);

  const focusHandler = () => {
    ref.current.focus();
  };

  useWindowEvent("focusOnContact", focusHandler);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    fetch(process.env.NEXT_PUBLIC_CONTACT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        text: message,
        email,
      }),
    })
      .then(async (res) => {
        if (res.status === 429) {
          setOpen(true);
          return setResponse({
            title: "Error!",
            body: Messages.RateLimit,
          });
        }
        const data = await res.json();

        if (data.status === "success") {
          setOpen(true);
          setEmail("");
          setName("");
          setMessage("");
          setResponse({ title: "Success!", body: Messages.Success });
        } else {
          setOpen(true);
          setResponse({ title: "Error!", body: data.error || data });
        }
      })
      .catch(() => {
        setResponse({ title: "Error!", body: "An error occurred" });
        setOpen(true);
      });
  }

  return (
    <section id="contact">
      {open ? <ContactModal onClose={() => setOpen(false)} options={response} /> : null}
      <h1 className="section__title">Contact me</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Enter your name</label>
          <input
            ref={ref}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Enter message</label>
          <textarea
            rows={5}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>

        <div>
          <a
            className={classes([styles.formSmall, styles.formLink])}
            href="mailto:casper.iversen2@gmail.com"
          >
            Send me an email directly
          </a>
          <button style={{ float: "right" }} className="btn btn__light" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
