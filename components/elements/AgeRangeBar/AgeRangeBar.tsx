"use client";

import { useEffect, useState } from "react";

type Props = {
  percentage: number;
  isHighest: boolean;
};

const AgeRangeBar = (props: Props) => {
  const { percentage, isHighest } = props;

  const [height, setHeight] = useState("0%");
  const [background, setBackground] = useState("hsl(var(--secondary))");

  useEffect(() => {
    if (isHighest) {
      setBackground("var(--sky-foreground)");
    } else {
      setBackground("var(--sky-secondary)");
    }
  }, [isHighest]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight(`${percentage}%`);
    }, 500);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex h-full w-[15%] flex-col items-center justify-end">
      <span className="secondary-font colour-animation mb-[1px] whitespace-pre text-center text-[3px] text-secondary">
        {`${percentage}%`}
      </span>
      <div
        className="colour-animation w-full duration-500"
        style={{
          height,
          background,
        }}
      />
    </div>
  );
};

export default AgeRangeBar;
