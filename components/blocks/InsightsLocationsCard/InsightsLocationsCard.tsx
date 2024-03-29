import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import InsightsLocations from "@/components/elements/InsightsLocations";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
  data: {};
  loop: number;
};

const InsightsLocationsCard = (props: Props) => {
  const { rounded, type, isActive, data, loop } = props;

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Locations" />
          <div className="flex flex-col gap-2">
            <InsightsLocations data={data} loop={loop} />
          </div>
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsLocationsCard;
