import Head from "next/head";
import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <main className="main" id="about">
        <Head>
          <title>Casper Iversen - Web Developer </title>
        </Head>
        <h1 className="main__title">I am Casper</h1>

        <p className="main__text">
          Hello, I am Casper! I am a 15y/o programmer and student. I Love
          programming a lot of things such as: making websites, bots,
          applications and more. I'm a self taught developer and I've been
          programming for about 2 years now and still learning new technologies
          every day, mostly focusing on React and design at the moment.
        </p>

        <div className="btn__container">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light"
            href="https://github.com/dev-caspertheghost"
          >
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light"
            href="https://twitter.com/casper124578"
          >
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light"
            href="https://www.linkedin.com/in/casper-iversen-54bbb71a4/"
          >
            LinkedIn
          </a>
        </div>
      </main>
      <section id="contact">
        <h1 className="contact__title">Contact me</h1>
        <form onSubmit={onSubmit}>
          <div className="form__group">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Enter your email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form__input"
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
            ></textarea>
          </div>
          <button
            style={{ float: "right" }}
            className="btn btn__light"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

    </>
  );
}
