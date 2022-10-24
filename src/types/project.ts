export interface Project {
  title: string;
  description: string;
  buttons: Button[];
  isFeatured?: boolean;
}

export interface Button {
  url: string;
  name: string;
}
