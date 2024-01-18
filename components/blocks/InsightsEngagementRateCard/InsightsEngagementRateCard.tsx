import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardStat from "@/components/elements/InsightsCardStat";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";

type Props = {
  value: number;
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsEngagementRateCard = (props: Props) => {
  const { rounded, isActive, value, type } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Engagement Rate" />
          <InsightsCardStat
            title={`${value}%`}
            subTitle="Average"
            useSufficeTitleStyle
          />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsEngagementRateCard;
