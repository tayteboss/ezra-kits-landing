import { motion, useScroll, useTransform } from "framer-motion";

const RevealContentScroll = (props) => {
  const { windowHeight, distanceToTop } = props;

  const { scrollY } = useScroll();

  const opacity1 = useTransform(
    scrollY,
    [
      distanceToTop + windowHeight,
      distanceToTop + windowHeight * 3,
      distanceToTop + (windowHeight * 3 + 500),
    ],
    [1, 1, 0],
  );

  const transform1 = useTransform(
    scrollY,
    [
      distanceToTop + windowHeight,
      distanceToTop + windowHeight * 3,
      distanceToTop + (windowHeight * 3 + 500),
    ],
    ["translateY(0px)", "translateY(0px)", "translateY(-3px)"],
  );

  const opacity2 = useTransform(
    scrollY,
    [
      distanceToTop + (windowHeight * 3 + 500),
      distanceToTop + (windowHeight * 3 + 1000),
      distanceToTop + windowHeight * 6,
      distanceToTop + (windowHeight * 6 + 500),
    ],
    [0, 1, 1, 0],
  );

  const transform2 = useTransform(
    scrollY,
    [
      distanceToTop + (windowHeight * 3 + 500),
      distanceToTop + (windowHeight * 3 + 1000),
      distanceToTop + windowHeight * 6,
      distanceToTop + (windowHeight * 6 + 500),
    ],
    [
      "translateY(3px)",
      "translateY(0px)",
      "translateY(0px)",
      "translateY(-3px)",
    ],
  );

  const opacity3 = useTransform(
    scrollY,
    [
      distanceToTop + (windowHeight * 6 + 500),
      distanceToTop + (windowHeight * 6 + 1000),
    ],
    [0, 1],
  );

  const transform3 = useTransform(
    scrollY,
    [
      distanceToTop + (windowHeight * 6 + 500),
      distanceToTop + (windowHeight * 6 + 1000),
    ],
    ["translateY(3px)", "translateY(0px)"],
  );

  const width = useTransform(
    scrollY,
    [distanceToTop + windowHeight, distanceToTop + windowHeight * 9],
    ["0%", "100%"],
  );

  return (
    <div className="sticky top-0 flex h-[100vh] flex-1 items-center justify-center">
      <div>
        <p className="flex gap-2 text-[30px] leading-[1.2] lg:gap-3 lg:text-[50px]">
          <span>Making a</span>
          <span className="relative">
            <motion.span
              style={{ opacity: opacity1, transform: transform1 }}
              className="absolute left-0 top-[2px] font-gtAplinaStandardLightItalic"
            >
              beautiful
            </motion.span>
            <motion.span
              style={{ opacity: opacity2, transform: transform2 }}
              className="absolute left-0 top-[2px] font-gtAplinaStandardLightItalic"
            >
              professional
            </motion.span>
            <motion.span
              style={{ opacity: opacity3, transform: transform3 }}
              className="absolute left-0 top-[2px] font-gtAplinaStandardLightItalic"
            >
              stylish
            </motion.span>
          </span>
        </p>
        <p className="text-[30px] leading-[1.2] lg:text-[50px]">
          media kit should be
        </p>
        <p className="text-[30px] leading-[1.2] lg:text-[50px]">
          <span className="relative">
            fast
            <motion.span
              style={{ width }}
              className="absolute bottom-[1px] left-[0] h-[3px] bg-system-foreground"
            ></motion.span>
          </span>
          <span>{"  "}and easy.</span>
        </p>
      </div>
    </div>
  );
};

export default RevealContentScroll;
