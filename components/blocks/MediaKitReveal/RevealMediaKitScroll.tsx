import { motion, useScroll, useTransform } from "framer-motion";

const RevealMediaKitScroll = (props) => {
  const { windowHeight, distanceToTop } = props;

  const { scrollY } = useScroll();

  const transform = useTransform(
    scrollY,
    [distanceToTop + windowHeight, distanceToTop + windowHeight * 9],
    ["translateY(0)", "translateY(-50%)"],
  );

  const opacity1 = useTransform(
    scrollY,
    [
      distanceToTop + windowHeight,
      distanceToTop + windowHeight * 3,
      distanceToTop + (windowHeight * 3 + 1000),
    ],
    [1, 1, 0],
  );

  const opacity2 = useTransform(
    scrollY,
    [
      distanceToTop + windowHeight,
      distanceToTop + windowHeight * 6,
      distanceToTop + (windowHeight * 6 + 1000),
    ],
    [1, 1, 0],
  );

  // create another useTransform for the parent div background
  // when the opacity changes, change the background colour from black to red, the inital should be red
  const background = useTransform(
    scrollY,
    [
      distanceToTop + windowHeight * 3,
      distanceToTop + (windowHeight * 3 + 1000),
      distanceToTop + windowHeight * 6,
      distanceToTop + (windowHeight * 6 + 1000),
    ],
    ["#D9D9D9", "#f8b19c", "#f8b19c", "#D9D9D9"],
  );

  return (
    <motion.div
      className="performance relative flex h-full flex-1 items-center justify-center overflow-hidden border-r border-system-foreground p-10"
      style={{ background }}
    >
      <div className="mx-auto flex w-[150px] items-center justify-center lg:w-[250px]">
        <div className="relative w-full overflow-hidden pt-[217%]">
          <div className="mask-test absolute inset-0 h-full w-full">
            <div className="bg-night-background relative h-full w-full">
              <div className="relative h-full">
                <motion.img
                  src="/images/test-scroller-media-kit.png"
                  alt="Media Kit Night"
                  style={{
                    transform,
                    opacity: opacity1,
                  }}
                  className="absolute left-0 top-0 z-30 w-full object-cover object-top pt-[20px]"
                />
                <motion.img
                  src="/images/test-scroller-media-kit-2.png"
                  alt="Media Kit Night"
                  style={{
                    transform,
                    opacity: opacity2,
                  }}
                  className="absolute left-0 top-0 z-20 w-full object-cover object-top pt-[20px]"
                />
                <motion.img
                  src="/images/test-scroller-media-kit.png"
                  alt="Media Kit Night"
                  style={{
                    transform,
                  }}
                  className="absolute left-0 top-0 z-10 w-full object-cover object-top pt-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevealMediaKitScroll;
