import { Project } from "types/project";
const url = "https://github.com/dev-caspertheghost";

const VIEW_CODE = "View Code";
const OPEN_PROJECT = "Open Project";
const VIEW_CASE_STUDY = "View case study";

export const projects: Project[] = [
  {
    isFeatured: true,
    title: "SnailyCAD",
    description:
      "An open source, web-based Computer Aided Dispatch (CAD) for communities who love police roleplaying and dispatching. Adored by many communities.",
    buttons: [
      {
        url: "https://github.com/SnailyCAD/snaily-cadv4",
        name: VIEW_CODE,
      },
      {
        url: "https://snailycad.caspertheghost.me",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    isFeatured: true,
    title: "GhostyBot",
    description:
      "An open source and feature-rich Discord bot with over 160 commands. Used in over 250 servers and 130 000 users.",
    buttons: [
      {
        url: `${url}/ghostybot`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    isFeatured: true,
    title: "pastebin-api",
    description:
      "A simple npm package to interact with the Pastebin api. Downloaded over 70.000 times on npm.",
    buttons: [
      {
        url: `${url}/pastebin-api`,
        name: VIEW_CODE,
      },
      {
        name: "View on npm",
        url: "https://www.npmjs.com/package/pastebin-api",
      },
    ],
  },
  {
    title: "notey.app",
    description:
      "A notes app to keep track of important things and share notes with others. Used to take personal notes for studies and quick notes.",
    buttons: [
      {
        url: "/case-study/notey.app",
        name: VIEW_CASE_STUDY,
      },
      {
        name: OPEN_PROJECT,
        url: "https://notey.caspertheghost.me",
      },
    ],
  },
  {
    isFeatured: true,
    title: "Home inventory",
    description:
      "A home inventory app to keep track of items in your home (food items, tech, medical supplies, etc.).",
    buttons: [
      {
        url: "/case-study/home-inventory",
        name: VIEW_CASE_STUDY,
      },
      {
        url: `${url}/home-inventory`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "Terminal",
    description:
      "Functional terminal clone with working keyboard shortcuts and commands, based on my personal ZSH theme made with React, Vite and Tailwind CSS.",
    buttons: [
      {
        url: "https://terminal.caspertheghost.me",
        name: OPEN_PROJECT,
      },
      {
        url: `${url}/terminal-site`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "new-tab",
    description:
      "This replaces the new-tab screen with a great looking dashboard that display the current time and weather with more widgets available.",
    buttons: [
      {
        url: `${url}/new-tab`,
        name: VIEW_CODE,
      },
      {
        url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab1/",
        name: "Install addon",
      },
    ],
  },
  {
    isFeatured: true,
    title: "More projects",
    description: "You can view more projects on the Projects page.",
    buttons: [
      {
        url: "/projects",
        name: "View more projects",
      },
    ],
  },
];
