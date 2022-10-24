export interface TimelineItem {
  year: number;
  title: string;
  text: string;
  url?: string;
  tag?: "job";

  date?: string;
  full_date?: string; // eg: March 28, 2021
}
