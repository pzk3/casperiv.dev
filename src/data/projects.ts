import Project from "types/Project";
const url = "https://github.com/dev-caspertheghost";

const VIEW_CODE = "View Code";
const OPEN_PROJECT = "Open Project";

const projects: Project[] = [
  {
    title: "notey.app",
    description: "A notes app to keep track of important things and share notes with others",
    buttons: [
      {
        url: `${url}/notey.app`,
        name: VIEW_CODE,
      },
      {
        url: "https://notey.caspertheghost.me",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    title: "SnailyCAD",
    description:
      "An open source Computer Aided Dispatch (CAD) for a game called FiveM, this is a web based integration for communities who love police roleplaying and dispatching.",
    buttons: [
      {
        url: `${url}/snaily-cadv3`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "pastebin-api",
    description: "A very simple pastebin npm package to interact with the pastebin api! ",
    buttons: [
      {
        url: `${url}/pastebin-api`,
        name: VIEW_CODE,
      },
      {
        name: "View on NPM",
        url: "https://www.npmjs.com/package/pastebin-api",
      },
    ],
  },
  {
    title: "GhostyBot",
    description:
      "A Discord bot with a lot of commands for Discord communities. (+180 commands) Economy, util, fun, music, admin and xp system ",
    buttons: [
      {
        url: `${url}/ghostybot`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://ghostybot.tk",
      },
    ],
  },
  {
    title: "Statistics Dashboard",
    description:
      "A fully responsive statistics dashboard made with plain CSS, HTML and a little bit of JavaScript",
    buttons: [
      {
        url: `${url}/css-statistic-dashboard`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://dev-caspertheghost.github.io/css-statistic-dashboard/",
      },
    ],
  },
  {
    title: "Other projects",
    description: "You can view all my other projects on GitHub below",
    buttons: [
      {
        url: `${url}?tab=repositories`,
        name: "Show projects",
      },
    ],
  },
];

export default projects;
