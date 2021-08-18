export interface SkillItem {
  header: string;
  items: string[];
}

export const skills: SkillItem[] = [
  {
    header: "Frontend",
    items: [
      "HTML, CSS & SCSS",
      "styled-components",
      "JavaScript",
      "TypeScript",
      "React & Next.js",
      "State management (React redux, MobX)",
    ],
  },
  {
    header: "Backend",
    items: ["Node", "REST APIs", "MongoDB & MySQL", "Prisma"],
  },
  {
    header: "Other",
    items: ["NGINX", "DigitalOcean", "VSCode", "Git"],
  },
];
