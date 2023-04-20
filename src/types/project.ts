export interface Project {
  title: string;
  description: string;
  isFeatured?: boolean;

  projectURL?: URL;
  npmURL?: URL;
  addonURL?: URL;
  viewMoreURL?: URL;
  codeURL?: URL;
}

type URL = string | null;

export interface Button {
  url: string;
  name: string;
}
