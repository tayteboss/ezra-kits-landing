import InsightsAgeRangeCard from "../InsightsAgeRangeCard";
import InsightsContentReachCard from "../InsightsContentReachCard/InsightsContentReachCard";
import InsightsEngagementRateCard from "../InsightsEngagementRateCard";
import InsightsFollowersCard from "../InsightsFollowersCard";
import InsightsGenderCard from "../InsightsGenderCard";
import InsightsLocationsCard from "../InsightsLocationsCard";
import InsightsViewsCard from "../InsightsViewsCard";

const InsightsPanel = (props) => {
  const {
    followersData,
    engagementRateData,
    viewsData,
    contentReachData,
    genderData,
    countriesData,
    ageData,
    loop,
  } = props;

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-GB", options);

  return (
    <div className="mx-auto max-w-[960px] rounded-[10px] bg-system-background p-4 shadow-lg">
      <div className="mb-4 flex flex-col items-center justify-between gap-2 md:flex-row md:items-end md:gap-0">
        <div className="flex gap-4">
          <p className="font-twkLausanne450 text-[20px] text-system-foreground">
            Instagram
          </p>
          <p className="font-twkLausanne450 text-[20px] text-system-secondary">
            TikTok
          </p>
          <p className="font-twkLausanne450 text-[20px] text-system-secondary">
            YouTube
          </p>
        </div>
        <p className="text-[12px] text-system-secondary">
          Last Updated: {formattedDate}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="relative grid grid-cols-6 justify-center gap-3 sm:grid-cols-12">
          <InsightsFollowersCard
            value={followersData}
            isActive
            handle="instagram_username"
            type="performance"
          />
          <InsightsEngagementRateCard
            value={engagementRateData}
            isActive
            type="performance"
          />
          <InsightsViewsCard value={viewsData} isActive type="performance" />
          <InsightsAgeRangeCard data={ageData} isActive type="performance" />
          <InsightsContentReachCard
            data={contentReachData}
            isActive
            type="performance"
          />
          <InsightsGenderCard data={genderData} isActive type="performance" />
          <InsightsLocationsCard
            data={countriesData}
            isActive
            type="performance"
            loop={loop}
          />
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
