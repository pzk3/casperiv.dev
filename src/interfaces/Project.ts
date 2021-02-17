interface Project {
  title: string;
  description: string;
  buttons: Array<Button>;
}

export interface Button {
  url: string;
  name: string;
}

export default Project;
