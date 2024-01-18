import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardPercentageOrder from "@/components/elements/InsightsCardPercentageOrder";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsGenderCard = (props: Props) => {
  const { rounded, type, isActive } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Gender" />
          <InsightsCardPercentageOrder
            statOneTitle="Female"
            statOnePercentage={60}
            statTwoTitle="Male"
            statTwoPercentage={40}
          />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsGenderCard;
