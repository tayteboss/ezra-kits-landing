import { motion } from "framer-motion";

export type WrapperType = "performance" | "audience";

type Props = {
  children: React.ReactNode;
  type?: WrapperType;
  rounded?: boolean;
};

const wrapperVariants = {
  hidden: {
    opacity: 0,
    y: 3,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const InsightsCardWrapper = (props: Props) => {
  const { children, type = "performance", rounded = false } = props;

  return (
    <motion.div className={`${type}-card h-[220px]`} variants={wrapperVariants}>
      <div
        className={`flex h-full flex-col justify-between rounded-[4px] bg-[#FAFAFA] p-3`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default InsightsCardWrapper;
