"use client";

import AgeRangeBar from "../AgeRangeBar";
import { useInView } from "react-intersection-observer";

const AgeRangeChart = (props: all) => {
  const { data } = props;

  const hasData = data && data.length > 0;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const spanStyling =
    "secondary-font colour-animation flex w-[6px] justify-center whitespace-pre text-center text-center text-[3px] text-foreground";

  return (
    <div className="flex h-full flex-col" ref={ref}>
      <div className="flex h-full justify-between gap-[10%] px-1">
        {hasData &&
          data.map((item, i) => {
            return (
              <AgeRangeBar
                percentage={inView ? item.percentage : 0}
                isHighest={item.highest}
                key={`${item}-${i}`}
              />
            );
          })}
      </div>
      <div className="colour-animation mb-[2px] h-[1px] w-full bg-secondary opacity-25" />
      <div className="flex w-full justify-around">
        <span className={spanStyling}>13-17</span>
        <span className={spanStyling}>18-24</span>
        <span className={spanStyling}>25-34</span>
        <span className={spanStyling}>35-44</span>
      </div>
    </div>
  );
};

export default AgeRangeChart;
