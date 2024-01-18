"use client";

import { AnimatePresence, motion } from "framer-motion";

const InsightsLocations = (props: any) => {
  const { data } = props;

  return (
    <AnimatePresence mode="wait">
      <div className="flex w-full flex-col items-start justify-center gap-1">
        {data.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            initial={{ opacity: 0, y: -1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1 }}
            transition={{ duration: 0.2 }}
            className="mb-1 flex w-full justify-between"
          >
            <span
              className={`text-[24px] ${
                i === 0 ? "text-foreground" : "text-secondary"
              } secondary-font mb-1: colour-animation font-light leading-none`}
            >
              {item.title}
            </span>
            <span
              className={`text-[24px] ${
                i === 0 ? "text-foreground" : "text-secondary"
              } secondary-font mb-1: colour-animation font-light leading-none`}
            >
              {item.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default InsightsLocations;
