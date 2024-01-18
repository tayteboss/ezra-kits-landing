"use client";

import { AnimatePresence, motion } from "framer-motion";

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

const InsightsLocations = (props: any) => {
  const { data, loop } = props;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex w-full flex-col items-start justify-center gap-[1px]"
        key={loop}
      >
        {data.map((item, i) => (
          <div key={i} className="mb-1 flex w-full justify-between">
            <span
              className={`text-[20px] ${
                i === 0 ? "text-system-foreground" : "text-system-secondary"
              } font-twkLausanne450 font-light leading-none`}
            >
              {item.title}
            </span>
            <span
              className={`text-[20px] ${
                i === 0 ? "text-system-foreground" : "text-system-secondary"
              } font-twkLausanne450 font-light leading-none`}
            >
              {item.percentage}%
            </span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default InsightsLocations;
