import * as React from "react";
import { useWindowEvent } from "@casper124578/useful/hooks/useWindowEvent";
import styles from "css/contact.module.scss";
import { classes } from "src/lib/classes";
import { Toast } from "@components/index";

const Messages = {
  Success:
    "Thank you for your message! The message has been sent my way and I will respond as soon as I can. The email you entered below should've also gotten CC'd",
  RateLimit: "Too many requests, please slow wait 15 more minutes before sending a new mail",
  UnknownError: "An unexpected error occurred! Please try again later.",
};

const ContactSection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState({ active: false, message: "" });

  const ref = React.useRef<HTMLInputElement>(null);

  function focusHandler() {
    ref.current.focus();
  }

  useWindowEvent("focusOnContact", focusHandler);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL, {
        method: "POST",
        body: JSON.stringify({
          name,
          text: message,
          email,
        }),
      });

      if (res.status === 429) {
        return setToast({ active: true, message: Messages.RateLimit });
      }

      const data = await res.json();

      if (data.status === "success") {
        setToast({ active: true, message: Messages.Success });

        setEmail("");
        setName("");
        setMessage("");
      } else {
        setToast({ active: true, message: data?.error || Messages.UnknownError });
      }
    } catch (e) {
      setToast({ active: true, message: Messages.UnknownError });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <Toast
        closeAfterMs={5000}
        active={toast.active}
        message={toast.message}
        onClose={() => setToast({ active: false, message: "" })}
      />

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
            className={classes(styles.formSmall, styles.formLink)}
            href="mailto:hello@caspertheghost.me"
          >
            Send me an email directly
          </a>
          <button
            disabled={loading}
            style={{ float: "right" }}
            className="btn btn__light"
            type="submit"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
