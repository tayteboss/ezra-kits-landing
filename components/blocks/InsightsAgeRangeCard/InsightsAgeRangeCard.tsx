import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsAgeRange from "@/components/elements/InsightsAgeRange";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsAgeRangeCard = (props: Props) => {
  const { rounded, type, isActive } = props;

  const testData = {
    all: [
      { percentage: 20, stat: 200000, highest: false },
      { percentage: 10, stat: 461000, highest: false },
      { percentage: 60, stat: 546000, highest: true },
      { percentage: 10, stat: 135000, highest: false },
    ],
    male: [
      { percentage: 10, stat: 461000, highest: false },
      { percentage: 60, stat: 546000, highest: true },
      { percentage: 10, stat: 12024, highest: false },
      { percentage: 20, stat: 200000, highest: false },
    ],
    female: [
      { percentage: 30, stat: 546000, highest: true },
      { percentage: 30, stat: 12024, highest: true },
      { percentage: 20, stat: 200000, highest: false },
      { percentage: 20, stat: 12024, highest: false },
    ],
  };

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Age Range" />
          <InsightsAgeRange data={testData} />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsAgeRangeCard;
