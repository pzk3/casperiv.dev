/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from "next/head";
import TimelineSection from "../components/TimelineSection";
import ProjectSection from "../components/ProjectsSection";
import ContactModal from "../components/ContantModal";
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
import { ContactIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "../components/icons/about";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const EMAILJS_MAIL_SERVICE = process.env.EMAILJS_MAIL_SERVICE;
  const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    emailjs
      .send(EMAILJS_MAIL_SERVICE, EMAILJS_TEMPLATE_ID, {
        name,
        message,
        email,
      })
      .then(() => {
        setSuccess(true);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch(() => {
        setSuccess(false);
      });
  }

  useEffect(() => {
    init(EMAILJS_USER_ID);
  }, []);

  return (
    <>
      <main className="main" id="about">
        <Head>
          <title>Casper Iversen - Web Developer </title>
        </Head>
        <div className="main__title">
          <h1>I am Casper</h1>
          <h2>Frontend web developer</h2>
        </div>

        <p className="main__text">
          Hello, I am Casper! I am a 15y/o programmer and student. I Love programming a lot of
          things such as: websites, bots, applications and more. I am a self taught developer and I
          have been programming for about 2 years now and still learning new technologies every day,
          mostly focusing on React, TypeScript and design.
        </p>

        <div className="btn__container">
          <a className="btn btn__light btn__icon" href="#contact">
            <ContactIcon />
            Contact
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href="https://github.com/dev-caspertheghost"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href="https://twitter.com/casper124578"
          >
            <TwitterIcon />
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href="https://www.linkedin.com/in/casper-iversen-54bbb71a4/"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </main>

      {/* Skills */}
      <section id="skills">
        <h1 className="section__title">My Backpack</h1>

        <div className="skills__icons">
          <div aria-label="HTML - Expert" className="skills__icon">
            <HtmlIcon />
          </div>
          <div aria-label="CSS - Expert" className="skills__icon">
            <CSSIcon />
          </div>
          <div aria-label="JavaScript - Intermediate" className="skills__icon lg">
            <JavaScriptIcon />
          </div>
          <div aria-label="TypeScript - Intermediate" className="skills__icon lg">
            <TypescriptIcon />
          </div>
          <div aria-label="React - Intermediate" className="skills__icon lg">
            <ReactIcon />
          </div>
          <div aria-label="BootStrap - Intermediate" className="skills__icon lg">
            <BootstrapIcon />
          </div>
          <div aria-label="NodeJs - Intermediate" className="skills__icon lg">
            <NodejsIcon />
          </div>
          <div aria-label="MongoDB - Intermediate" className="skills__icon lg">
            <DatabaseIcon />
          </div>
          <div aria-label="NPM - Expert" className="skills__icon">
            <NpmIcon />
          </div>

          <div aria-label="Terminal - Intermediate" className="skills__icon lg">
            <TerminalIcon />
          </div>

          <div aria-label="GIT & GitHub - Intermediate" className="skills__icon lg">
            <GitIcon />
          </div>
        </div>
      </section>

      <ProjectSection />

      <TimelineSection />

      {/* Contact */}
      <section id="contact">
        <ContactModal
          onClose={() => setSuccess(false)}
          shown={success}
          options={{ title: "Success", body: "Successfully send your message my way!" }}
        />
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
              type="text"
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
    </>
  );
}
