"use client";

import { useEffect, useState } from "react";

type Props = {
  statOneTitle: string;
  statOnePercentage: number;
  statTwoTitle: string;
  statTwoPercentage: number;
};

const InsightsCardPercentageOrder = (props: Props) => {
  const { statOneTitle, statOnePercentage, statTwoTitle, statTwoPercentage } =
    props;

  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    if (statOnePercentage > statTwoPercentage) {
      setStatistics([
        {
          title: statOneTitle,
          percentage: statOnePercentage,
        },
        {
          title: statTwoTitle,
          percentage: statTwoPercentage,
        },
      ]);
    } else {
      setStatistics([
        {
          title: statTwoTitle,
          percentage: statTwoPercentage,
        },
        {
          title: statOneTitle,
          percentage: statOnePercentage,
        },
      ]);
    }
  }, [statOnePercentage, statTwoPercentage, statOneTitle, statTwoTitle]);

  return (
    <div className="items-left flex flex-col justify-between gap-5">
      {statistics.map((stat, i) => (
        <span
          key={`${stat.percentage}-${i}`}
          className={`secondary-font colour-animation text-[34px] font-light leading-[0] lg:text-[38px] ${
            i === statistics.length - 1 ? "text-secondary" : "text-foreground"
          }`}
        >
          {stat.title} {stat.percentage}
          <span
            className={`secondary-font colour-animation text-2xl ${
              i === statistics.length - 1 ? "text-secondary" : "text-foreground"
            }`}
          >
            %
          </span>
        </span>
      ))}
    </div>
  );
};

export default InsightsCardPercentageOrder;
