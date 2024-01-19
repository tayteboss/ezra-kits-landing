import { AnimatePresence, motion } from "framer-motion";
import { Instagram } from "lucide-react";

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Menu = (props) => {
  const { isActive, setMobileMenuIsActive } = props;

  const primaryLinkStyles =
    "border-b border-system-foreground pt-6 pb-3 font-gtAplinaStandardLightItalic text-[32px]";

  const secondaryLinkStyles = "text-[20px] underline";

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed left-0 top-0 h-screen w-full bg-system-accent pb-8 pt-16"
        >
          <div className="relative h-full px-3 md:px-5">
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col">
                <motion.div
                  variants={childVariants}
                  className={primaryLinkStyles}
                  key={1}
                >
                  <a
                    onClick={() => setMobileMenuIsActive(false)}
                    href="#example"
                  >
                    Example
                  </a>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className={primaryLinkStyles}
                  key={2}
                >
                  <a
                    onClick={() => setMobileMenuIsActive(false)}
                    href="#example"
                  >
                    Example
                  </a>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className={primaryLinkStyles}
                  key={3}
                >
                  <a
                    onClick={() => setMobileMenuIsActive(false)}
                    href="#example"
                  >
                    Example
                  </a>
                </motion.div>
              </div>
              <motion.div
                variants={childVariants}
                className="flex items-end justify-between"
                key={4}
              >
                <div>
                  <div className={secondaryLinkStyles}>
                    <a
                      onClick={() => setMobileMenuIsActive(false)}
                      href="#example"
                    >
                      Example
                    </a>
                  </div>
                  <div className={secondaryLinkStyles}>
                    <a
                      onClick={() => setMobileMenuIsActive(false)}
                      href="#example"
                    >
                      Example
                    </a>
                  </div>
                  <div className={secondaryLinkStyles}>
                    <a
                      onClick={() => setMobileMenuIsActive(false)}
                      href="#example"
                    >
                      Example
                    </a>
                  </div>
                </div>
                <div>
                  <a href="/" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
