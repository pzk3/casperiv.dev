import { FC, FormEvent, useState } from "react";
import ContactModal from "@components/ContactModal";

const Messages = {
  Success: "Successfully sent your message my way! I should respond soon.",
  RateLimit: "Too many requests, please slow wait 15 more minutes before sending a new mail",
};

const ContactSection: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<{ title: string; body: string }>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    fetch(process.env.CONTACT_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        text: message,
        email: email,
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
        <div className="form__group">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="message">Enter message</label>
          <textarea
            rows={5}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form__input"
            required
          ></textarea>
        </div>

        <div>
          <a className="form__small form__link" href="mailto:casper.iversen2@gmail.com">
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
