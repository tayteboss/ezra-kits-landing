import insightsCardSufficeStyling from "@/utils/insightsCardSufficeStyling";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  subTitle: string;
  link?: string | boolean;
  useSufficeTitleStyle?: boolean;
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

const InsightsCardStat = (props: Props) => {
  const { title, subTitle, link = false, useSufficeTitleStyle = false } = props;

  const subTitleStyles =
    "secondary-font inline-block text-[3px] text-secondary colour-animation";

  const undefinedTitle = title.includes("undefined");

  return (
    <div className="items-left flex flex-col items-start justify-start">
      <AnimatePresence mode="wait">
        {!undefinedTitle && (
          <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="secondary-font colour-animation mb-2 font-twkLausanne450 text-[50px] leading-[0.5] tracking-tight text-foreground"
            key={title}
          >
            {useSufficeTitleStyle
              ? insightsCardSufficeStyling(title)
              : title || ""}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InsightsCardStat;
