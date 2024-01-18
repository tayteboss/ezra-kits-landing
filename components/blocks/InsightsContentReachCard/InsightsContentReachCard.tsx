import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import InsightsContentReach from "@/components/elements/InsightsContentReach";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type: WrapperType;
};

const InsightsContentReachCard = (props: Props) => {
  const { isActive, rounded, type } = props;

  const testData = [
    {
      title: "Posts",
      followers: 82, // 82% of followers
      nonFollowers: 18, // 18% of non-followers
      total: 100, // Posts is the largest share of content
    },
    {
      title: "Stories",
      followers: 75,
      nonFollowers: 25,
      total: 60, // ***NOTE***: Stories total content reach is 60% of posts
    },
    {
      title: "Reels",
      followers: 50,
      nonFollowers: 50,
      total: 30, // ***NOTE***: Reels total content reach is 30% of posts
    },
  ];

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Content reach" />
          <InsightsContentReach data={testData} />
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsContentReachCard;
