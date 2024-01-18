import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsAgeRange from "@/components/elements/InsightsAgeRange";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
  data: {};
};

const InsightsAgeRangeCard = (props: Props) => {
  const { rounded, type, isActive, data } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Age Range" />
          <InsightsAgeRange data={data} />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsAgeRangeCard;
