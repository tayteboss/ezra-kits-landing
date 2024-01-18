import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardStat from "@/components/elements/InsightsCardStat";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import { formatStats } from "@/utils/formatStats";
import { useState } from "react";

type Props = {
  value: number;
  handle: string;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsFollowersCard = (props: Props) => {
  const { value, type, handle, isActive } = props;

  const [cardTitle, setCardTitle] = useState("Followers");

  return (
    <>
      {isActive && (
        <InsightsCardWrapper type={type}>
          <InsightsCardTitle title={cardTitle} />
          <InsightsCardStat
            title={formatStats(`${value}`)}
            subTitle={`@${handle}`}
            link="/"
            useSufficeTitleStyle
          />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsFollowersCard;
