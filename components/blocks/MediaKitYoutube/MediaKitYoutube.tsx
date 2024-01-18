"use client";

import InsightsCardsLayout from "@/components/layout/InsightsCardsLayout";
import InsightsSectionLayout from "@/components/layout/InsightsSectionLayout";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import { useCustomInView } from "@/hooks/useCustomInView";
import { useMediaKit } from "@/state/mediaKit";
import { motion } from "framer-motion";
import SocialYoutubeAudience from "../SocialYoutubeAudience";
import SocialYoutubePerformance from "../SocialYoutubePerformance";
import { Youtube } from "@/types/mediaKit";
import { DefaultSettings, DefaultValues } from "./defaultValues";
import { usePreview } from "@/state/preview";

const wrapperVariants = {
  hidden: {
    opacity: 0,
    y: 10,
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
      delay: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const MediaKitYoutube = () => {
  const { getElement, mediaKit } = useMediaKit()();
  const { isPreview } = usePreview()();

  const youtube = getElement("youtube") as Youtube;
  const [ref2, inView2] = useCustomInView({ threshold: 0.05 });

  const isConnected = mediaKit?.connected_phyllo_account_ids?.youtube;
  if (!isConnected && isPreview) return null;

  const settings = isConnected ? youtube?.value?.payload : DefaultSettings;

  const values = isConnected
    ? mediaKit?.socialValues?.youtube?.stats
    : DefaultValues;

  return (
    <section id="youtube" className="mb-10 lg:mb-[180px]">
      <MediaKitHoverLayout>
        <InsightsSectionLayout
          title="Youtube"
          id="youtube"
          // NOTE: only for demo purposes
          lastUpdated={isConnected ? "Last updated 9 Jan, 2024" : ""}
        >
          <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            key={1}
            ref={ref2}
          >
            <InsightsCardsLayout type="youtube" isBlocked={!isConnected}>
              <SocialYoutubeAudience settings={{ ...settings }} />
              <SocialYoutubePerformance
                settings={{ ...settings }}
                value={{ ...values }}
              />
            </InsightsCardsLayout>
          </motion.div>
        </InsightsSectionLayout>
      </MediaKitHoverLayout>
    </section>
  );
};

export default MediaKitYoutube;
