"use client";

import InsightsAgeRangeCard from "@/components/blocks/InsightsAgeRangeCard";
import InsightsFollowersCard from "@/components/blocks/InsightsFollowersCard";
import InsightsGenderCard from "@/components/blocks/InsightsGenderCard";
import InsightsLocationsCard from "@/components/blocks/InsightsLocationsCard";
import InsightsContentReachCard from "../InsightsContentReachCard/InsightsContentReachCard";

const SocialInstagramAudience = () => {
  return (
    <>
      <InsightsFollowersCard
        value={5412}
        isActive
        handle="instagram_username"
        type="audience"
      />
      <InsightsAgeRangeCard isActive type="audience" />
      <InsightsContentReachCard isActive type="audience" />
      <InsightsLocationsCard isActive type="audience" />
      <InsightsGenderCard isActive type="audience" />
    </>
  );
};

export default SocialInstagramAudience;
