import ContentReachBar from "../ContentReachBar";
import { useInView } from "react-intersection-observer";

type Props = {
  data: any; // TBC
};

const InsightsContentReach = (props: Props) => {
  const { data } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div className="flex flex-col gap-6" ref={ref}>
      <div className="flex w-full flex-col gap-3">
        {data.map((item, i) => (
          <ContentReachBar data={item} key={i} inView={inView} />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <div className="h-[12px] w-[12px] rounded-full bg-secondary" />
          <p className="secondary-font colour-animation text-[12px] text-secondary">
            Followers
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-[12px] w-[12px] rounded-full bg-foreground" />
          <p className="secondary-font colour-animation text-[12px] text-secondary">
            Non-followers
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsContentReach;
