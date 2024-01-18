import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardStat from "@/components/elements/InsightsCardStat";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import { formatStats } from "@/utils/formatStats";

type Props = {
  value: number;
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsViewsCard = (props: Props) => {
  const { rounded, isActive, value, type } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Views" />
          <InsightsCardStat
            title={formatStats(`${value}`)}
            subTitle="Average"
            useSufficeTitleStyle
          />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsViewsCard;
