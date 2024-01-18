import ArrowIcon from "@/components/svgs/ArrowIcon";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -3,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const FlowWaypoints = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div className="mb-6 md:mb-10" ref={ref}>
      <motion.div
        className="flex items-center justify-center gap-3 md:gap-4"
        variants={wrapperVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
      >
        <motion.p
          className="w-[85px] text-center text-[14px] leading-tight text-system-foreground md:w-auto md:text-[18px]"
          variants={childVariants}
        >
          Design beautifully
        </motion.p>
        <motion.div variants={childVariants}>
          <ArrowIcon />
        </motion.div>
        <motion.p
          className="w-[85px] text-center text-[14px] leading-tight text-system-secondary opacity-50 md:w-auto md:text-[18px]"
          variants={childVariants}
        >
          Update automatically
        </motion.p>
        <motion.div variants={childVariants}>
          <ArrowIcon />
        </motion.div>
        <motion.p
          className="w-[75px] text-center text-[14px] leading-tight text-system-secondary opacity-50 md:w-auto md:text-[18px]"
          variants={childVariants}
        >
          Share with a click
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FlowWaypoints;
