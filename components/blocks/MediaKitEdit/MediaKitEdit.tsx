import PageLayout from "@/components/layouts/PageLayout";
import FlowWaypoints from "../FlowWaypoints";
import MediaKitCanvas from "../MediaKitCanvas";
import { useInView } from "react-intersection-observer";

const MediaKitEdit = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <section className="border-b border-system-foreground" ref={ref}>
      <PageLayout>
        <div className="pt-20 lg:pt-[120px]">
          <FlowWaypoints />
          <div
            className={`view-element-fade-in mb-10 lg:mb-16 ${
              inView ? "view-element-fade-in--in-view" : ""
            }`}
          >
            <h2 className="title-style text-center">
              Designed by professionals.
            </h2>
            <h2 className="title-style text-center font-gtAplinaStandardLightItalic">
              Refined by you.
            </h2>
          </div>
          <MediaKitCanvas />
        </div>
      </PageLayout>
    </section>
  );
};

export default MediaKitEdit;
