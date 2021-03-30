interface TimelineItem {
  date: string;
  full_date?: string; // eg: March 28, 2021
  title: string;
  text: string;
  url?: string;
}

export default TimelineItem;
