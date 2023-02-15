export interface Project {
  title: string;
  description: string;
  buttons: Button[];
  isFeatured?: boolean;

  projectURL?: URL;
  npmURL?: URL;
  addonURL?: URL;
  viewMoreURL?: URL;
  caseStudyURL?: URL;
  codeURL?: URL;
}

type URL = string | null;

export interface Button {
  url: string;
  name: string;
}
