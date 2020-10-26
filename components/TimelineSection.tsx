import { useState } from "react";
import timeline from "../data/timeline";
import TimelineItem from "../interfaces/Timeline";

const TimelineSection = () => {
  const [viewOlderText, setViewOlderText] = useState<string>("View older");
  const [length, setLength] = useState<number>(7);

  function showMore() {
    if (length > 7) {
      setLength(7);
      setViewOlderText("View older");
    } else {
      setLength((prev) => prev + 5);
      setViewOlderText("View less");
    }
  }

  return (
    <section id="timeline">
      <h1 className="section__title">Timeline</h1>
      <div className="timeline">
        {timeline.slice(0, length).map((item: TimelineItem, idx: number) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              key={idx}
              className={`timeline-item ${item.side}`}
            >
              <div className="timeline-item-body">
                <header className="timeline-item-header">
                  <h1>{item.title}</h1>
                  <p>{item.date}</p>
                </header>
                {item.text}
              </div>
            </a>
          );
        })}
        <button
          onClick={showMore}
          id="view-older-btn"
          className="view-older-btn"
        >
          {viewOlderText}
        </button>
      </div>
    </section>
  );
};

export default TimelineSection;
