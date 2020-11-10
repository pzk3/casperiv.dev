interface Project {
  title: string;
  description: string;
  buttons: Array<{
    url: string;
    name: string;
  }>;
}

export default Project;
