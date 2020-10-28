import Head from "next/head";
import TimelineSection from "../components/TimelineSection";
import emailjs, { init } from "emailjs-com";
import { FormEvent, useState, useEffect } from "react";
import {
  BootstrapIcon,
  CSSIcon,
  DatabaseIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodejsIcon,
  NpmIcon,
  ReactIcon,
  TerminalIcon,
  TypescriptIcon,
} from "../components/icons/skills";
import config from "../config";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    emailjs
      .send(config.emailJs.mailService, config.emailJs.templateId, {
        name,
        message,
        email,
      })
      .then(() => {
        setSuccess(true);
        setEmail("");
        setName("");
        setMessage("");
      });
  }

  useEffect(() => {
    init(config.emailJs.user_id);
  }, []);

  return (
    <>
      <main className="main" id="about">
        <Head>
          <title>Casper Iversen - Web Developer </title>
        </Head>
        <div className="main__title">
          <h1>I am Casper</h1>
          <h3>Frontend web developer</h3>
        </div>

        <p className="main__text">
          Hello, I am Casper! I am a 15y/o programmer and student. I Love
          programming a lot of things such as: websites, bots, applications and
          more. I'm a self taught developer and I've been programming for about
          2 years now and still learning new technologies every day, mostly
          focusing on React, TypeScript and design.
        </p>

        <div className="btn__container">
          <a className="btn btn__light" href="#contact">
            Contact
          </a>
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

      {/* Skills */}
      <section id="skills">
        <h1 className="section__title">My Backpack</h1>

        <div className="skills__icons">
          <HtmlIcon />
          <CSSIcon />
          <JavaScriptIcon />
          <TypescriptIcon />
          <ReactIcon />
          <BootstrapIcon />
          <NodejsIcon />
          <DatabaseIcon />
          <NpmIcon />
          <TerminalIcon />
          <GitIcon />
        </div>
      </section>

      <TimelineSection />

      {/* Contact */}
      <section id="contact">
        <h1 className="section__title">Contact me</h1>
        <form onSubmit={onSubmit}>
          {success ? <p>Successfully send message!</p> : null}
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
