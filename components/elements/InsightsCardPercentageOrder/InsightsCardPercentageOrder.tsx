"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  statOneTitle: string;
  statOnePercentage: number;
  statTwoTitle: string;
  statTwoPercentage: number;
};

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
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
    <AnimatePresence mode="wait">
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="items-left flex flex-col justify-between gap-1"
        key={statOnePercentage}
      >
        {statistics.map((stat, i) => (
          <span
            key={`${stat.percentage}-${i}`}
            className={`font-twkLausanne450 text-[26px] font-light leading-[1] lg:text-[34px] ${
              i === statistics.length - 1
                ? "text-system-secondary"
                : "text-system-foreground"
            }`}
          >
            {stat.title} {stat.percentage}
            <span
              className={`font-twkLausanne450 text-[20px] ${
                i === statistics.length - 1
                  ? "text-system-secondary"
                  : "text-system-foreground"
              }`}
            >
              %
            </span>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default InsightsCardPercentageOrder;
