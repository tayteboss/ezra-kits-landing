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
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
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

const MenuLinks = (props: Props) => {
  const { isActive } = props;

  const linkStyling =
    "text-system-foreground hover:text-system-accent duration-250";

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex hidden gap-3 md:block"
        >
          <motion.a
            variants={childVariants}
            className={linkStyling}
            href="#example"
            key={1}
          >
            Example
          </motion.a>
          <motion.a
            variants={childVariants}
            className={linkStyling}
            href="#example"
            key={2}
          >
            Example
          </motion.a>
          <motion.a
            variants={childVariants}
            className={linkStyling}
            href="#example"
            key={3}
          >
            Example
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuLinks;
