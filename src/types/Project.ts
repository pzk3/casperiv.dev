export interface Project {
  title: string;
  description: string;
  buttons: Button[];
}

export interface Button {
  url: string;
  name: string;
}
