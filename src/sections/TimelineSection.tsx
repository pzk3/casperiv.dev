import { useRef, useState, FC } from "react";
import timeline from "../data/timeline";
import TimelineItem from "types/Timeline";
import ArrowDown from "@components/icons/ArrowDown";

const TimelineSection: FC = () => {
  const [viewOlderText, setViewOlderText] = useState<string>("View All");
  const [length, setLength] = useState<number>(7);
  const btnRef = useRef<HTMLButtonElement>(null);

  function showMore() {
    if (length > 7) {
      setLength(7);
      setViewOlderText("View All");
      btnRef.current?.classList.remove("active");
    } else {
      setLength(() => timeline.length);
      setViewOlderText("View less");
      btnRef.current?.classList.add("active");
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
                  <p aria-label={item.full_date} className={item.full_date ? "tooltip" : null}>
                    {item.date}
                  </p>
                </header>
                {item.text}
              </div>
            </a>
          );
        })}
        <button ref={btnRef} onClick={showMore} id="view-older-btn" className="view-older-btn">
          {viewOlderText}
          <ArrowDown />
        </button>
      </div>
    </section>
  );
};

export default TimelineSection;
