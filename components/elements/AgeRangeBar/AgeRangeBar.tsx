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
      setBackground("var(--white-foreground)");
    } else {
      setBackground("var(--white-secondary)");
    }
  }, [isHighest]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight(`${percentage}%`);
    }, 500);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex h-full w-[20%] flex-col items-center justify-end">
      <span className="mb-1 whitespace-pre text-center font-twkLausanne450 text-[8px] text-system-foreground">
        {`${percentage}%`}
      </span>
      <div
        className="w-full duration-500"
        style={{
          height,
          background,
        }}
      />
    </div>
  );
};

export default AgeRangeBar;
