import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isActive: boolean;
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

const Logo = (props: Props) => {
  const { isActive } = props;

  return (
    <div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="font-gtAplinaStandardLightItalic text-[22px]"
          >
            EZRA
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;
