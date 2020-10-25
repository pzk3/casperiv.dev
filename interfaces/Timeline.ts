interface TimelineItem {
  date: string;
  title: string;
  text: string;
  side: "left" | "right";
  url?: string;
}

export default TimelineItem;
