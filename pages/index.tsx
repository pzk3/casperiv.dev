import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import { NextPage } from "next";
import TimelineSection from "../components/TimelineSection";
import ProjectSection from "../components/ProjectsSection";
import ContactModal from "../components/ContantModal";
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

const Index: NextPage = () => {
  const [age, setAge] = useState<string>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<{ title: string; body: string }>(null);

  useEffect(() => {
    // Thanks to https://ottomated.net/
    const calculatedAge = (
      (Date.now() - +new Date("07/21/2005")) /
      (60 * 60 * 24 * 365 * 1000)
    ).toFixed(3);

    setAge(calculatedAge);

    setInterval(() => setAge(calculatedAge), 60_000);
  }, []);

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
            body: "Too many requests, please slow wait 15 more minutes before sending a new mail",
          });
        }
        const data = await res.json();

        if (data.status === "success") {
          setOpen(true);
          setEmail("");
          setName("");
          setMessage("");
          setResponse({ title: "Success", body: "Successfully send your message my way!" });
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
          Hello, I am Casper! I am a {age}y/o programmer and student. I Love programming a lot of
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
            href={process.env.GITHUB_PROFILE_URL}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.TWITTER_PROFILE_URL}
          >
            <TwitterIcon />
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.LINKEDIN_PROFILE_URL}
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
          <button aria-label="HTML - Expert" className="skills__icon">
            <HtmlIcon />
          </button>
          <button aria-label="CSS - Expert" className="skills__icon">
            <CSSIcon />
          </button>
          <button aria-label="JavaScript - Intermediate" className="skills__icon lg">
            <JavaScriptIcon />
          </button>
          <button aria-label="TypeScript - Beginner" className="skills__icon lg">
            <TypescriptIcon />
          </button>
          <button aria-label="React - Intermediate" className="skills__icon lg">
            <ReactIcon />
          </button>
          <button aria-label="BootStrap - Intermediate" className="skills__icon lg">
            <BootstrapIcon />
          </button>
          <button aria-label="NodeJs - Intermediate" className="skills__icon lg">
            <NodejsIcon />
          </button>
          <button aria-label="MongoDB - Intermediate" className="skills__icon lg">
            <DatabaseIcon />
          </button>
          <button aria-label="NPM - Expert" className="skills__icon">
            <NpmIcon />
          </button>

          <button aria-label="Terminal - Intermediate" className="skills__icon lg">
            <TerminalIcon />
          </button>

          <button aria-label="GIT & GitHub - Intermediate" className="skills__icon lg">
            <GitIcon />
          </button>
        </div>
      </section>

      <ProjectSection />

      <TimelineSection />

      {/* Contact */}
      <section id="contact">
        <ContactModal onClose={() => setOpen(false)} shown={open} options={response} />
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
    </>
  );
};

export default Index;
