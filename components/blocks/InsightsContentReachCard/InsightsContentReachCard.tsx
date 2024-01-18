import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import InsightsContentReach from "@/components/elements/InsightsContentReach";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type: WrapperType;
  data: {};
};

const InsightsContentReachCard = (props: Props) => {
  const { isActive, rounded, type, data } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Content reach" />
          <InsightsContentReach data={data} />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsContentReachCard;
