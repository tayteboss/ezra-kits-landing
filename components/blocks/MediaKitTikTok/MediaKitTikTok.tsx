"use client";

import InsightsCardsLayout from "@/components/layout/InsightsCardsLayout";
import { motion } from "framer-motion";
import { useCustomInView } from "@/hooks/useCustomInView";
import InsightsSectionLayout from "@/components/layout/InsightsSectionLayout";
import { useMediaKit } from "@/state/mediaKit";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import SocialTikTokPerformance from "../SocialTikTokPerformance";
import SocialTikTokAudience from "../SocialTikTokAudience";
import { TikTok } from "@/types/mediaKit";
import { useProfile } from "@/state/profile";
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

const MediaKitTikTok = () => {
  const { getElement, mediaKit } = useMediaKit()();
  const { isPreview } = usePreview()();

  const tiktok = getElement("tiktok") as TikTok;
  const [ref2, inView2] = useCustomInView({ threshold: 0.05 });

  const isConnected = mediaKit?.connected_phyllo_account_ids?.tiktok;
  if (!isConnected && isPreview) return null;

  const settings = isConnected ? tiktok?.value?.payload : DefaultSettings;

  const values = isConnected
    ? mediaKit?.socialValues?.tiktok?.stats
    : DefaultValues;

  return (
    <section id="tiktok" className="mb-10 lg:mb-[180px]">
      <MediaKitHoverLayout>
        <InsightsSectionLayout
          title="TikTok"
          id="tiktok"
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
            <InsightsCardsLayout isBlocked={!isConnected} type="tiktok">
              <SocialTikTokAudience settings={{ ...settings }} />
              <SocialTikTokPerformance
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

export default MediaKitTikTok;
