import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardPercentageOrder from "@/components/elements/InsightsCardPercentageOrder";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
  data: {
    female: number;
    male: number;
  };
};

const InsightsGenderCard = (props: Props) => {
  const { rounded, type, isActive, data } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Gender" />
          <InsightsCardPercentageOrder
            statOneTitle="Female"
            statOnePercentage={data.female}
            statTwoTitle="Male"
            statTwoPercentage={data.male}
          />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsGenderCard;
