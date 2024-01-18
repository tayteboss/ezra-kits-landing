import { useEffect, useState } from "react";
import ColourPicker from "../ColourPicker";
import FontPicker from "../FontPicker";
import Image from "next/image";
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

const MediaKitCanvas = () => {
  const [activeColour, setActiveColour] = useState("lilac");
  const [activeFontStyle, setActiveFontStyle] = useState("Functional");
  const [font, setFont] = useState("twkLausanne450");

  useEffect(() => {
    if (activeFontStyle === "Functional") {
      setFont("twkLausanne450");
    } else if (activeFontStyle === "Timeless") {
      setFont("itcGaramondStdBookNarrow");
    } else if (activeFontStyle === "Elegant") {
      setFont("gtAplinaStandardLightItalic");
    } else if (activeFontStyle === "Audacious") {
      setFont("helveticaNeueCondensedBlack");
    }
  }, [activeFontStyle]);

  return (
    <div className="mb-12 md:mb-0">
      <div className="mb-16 flex flex-col items-center justify-center gap-5 md:mb-20 md:flex-row md:items-stretch md:gap-16">
        <ColourPicker
          activeColour={activeColour}
          setActiveColour={setActiveColour}
        />
        <FontPicker
          activeFont={activeFontStyle}
          setActiveFont={setActiveFontStyle}
        />
      </div>
      <div className="relative mx-auto w-[960px] max-w-[100%] rounded-t-[10px] bg-system-input px-2 pt-2 md:max-w-[90%] md:px-4 md:pt-3">
        <div className="media-kit-gradient absolute bottom-0 left-0 z-10 h-[75px] w-full sm:h-[100px] md:h-[200px]" />
        <div className="mb-2 flex gap-2 md:mb-3">
          <div className="h-[10px] w-[10px] rounded-full bg-system-background" />
          <div className="h-[10px] w-[10px] rounded-full bg-system-background" />
          <div className="h-[10px] w-[10px] rounded-full bg-system-background" />
        </div>
        <div
          className="relative rounded-t-[4px] px-2 pt-4 duration-500 md:px-8 md:pt-6 lg:pt-10"
          style={{ background: `var(--${activeColour}-background)` }}
        >
          <div className="mb-5 flex h-[40px] items-end justify-between align-baseline text-foreground md:h-[50px] lg:h-[68px]">
            <AnimatePresence mode="wait">
              {font && (
                <motion.h1
                  className={`font-${font} pr-0 text-[32px] leading-[0.9] duration-500 md:mb-0 md:text-[50px] lg:text-[75px]`}
                  style={{ color: `var(--${activeColour}-foreground)` }}
                  key={`${font}-1`}
                  variants={wrapperVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  Tayte Boss
                </motion.h1>
              )}
              {font && (
                <motion.span
                  className={`font-${font} whitespace-nowrap text-right duration-500`}
                  style={{ color: `var(--${activeColour}-foreground)` }}
                  key={`${font}-1`}
                  variants={wrapperVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  London, UK
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <div className="relative w-full pt-[120%]">
                <div className="absolute inset-0 overflow-hidden rounded-[3px]">
                  <Image
                    src="/images/media-kit-partnership-placeholder.jpg"
                    alt="Media kit hero"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative w-full pt-[120%]">
                <div className="absolute inset-0 overflow-hidden rounded-[3px]">
                  <Image
                    src="/images/media-kit-profile-placeholder-2.jpg"
                    alt="Media kit hero"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKitCanvas;
