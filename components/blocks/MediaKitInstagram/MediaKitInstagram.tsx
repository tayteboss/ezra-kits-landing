"use client";

import InsightsCardsLayout from "@/components/layouts/InsightsCardsLayout";
import InsightsSectionLayout from "@/components/layouts/InsightsSectionLayout";
import SocialInstagramAudience from "../SocialInstagramAudience";
import SocialInstagramPerformance from "../SocialInstagramPerformance";

const MediaKitInstagram = () => {
  return (
    <section className="mb-8">
      <InsightsSectionLayout
        title="Instagram"
        id="instagram"
        lastUpdated={"Last updated HARDCODE"}
      >
        <InsightsCardsLayout>
          <SocialInstagramAudience />
          {/* <SocialInstagramPerformance /> */}
        </InsightsCardsLayout>
      </InsightsSectionLayout>
    </section>
  );
};

export default MediaKitInstagram;
