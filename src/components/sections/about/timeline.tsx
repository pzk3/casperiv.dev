import { TimelineItem, TimelineItems } from "@ronin/casper";

interface TimelineProps {
  timelineData: TimelineItems;
}

export function Timeline(props: TimelineProps) {
  const topHalf = props.timelineData.filter((_, idx) => idx % 2 === 0);
  const bottomHalf = props.timelineData.filter((_, idx) => idx % 2 !== 0);

  return (
    <div className="flex flex-col w-full h-full mx-12 mt-[1%] tall:mt-0 tall:justify-center">
      <div className="flex flex-col gap-12">
        {/* desktop */}
        <div className="hidden tall:flex w-full gap-12">
          {topHalf.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <div className="hidden tall:flex w-full gap-12 ml-[200px]">
          {bottomHalf.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        {/* mobile */}
        <div className="flex tall:hidden w-full gap-12 ml-[200px]">
          {props.timelineData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card(props: TimelineItem) {
  return (
    <div className="bg-gray-dark border-2 border-gray-light text-primary max-w-[400px] w-[400px] min-h-[160px] rounded-2xl shadow-md p-6 cursor-default">
      <header className="flex flex-col-reverse gap-1">
        <h3 className="font-medium text-lg">{props.title}</h3>
        <h4 className="text-sm font-medium text-neutral-400">
          {props.month} {props.year}
          {props.tag ? (
            <>
              {" "}
              - <span className="text-accent">{props.tag}</span>
            </>
          ) : null}
        </h4>
      </header>

      <p className="text-primary font-inter mt-3">{props.description}</p>
    </div>
  );
}
