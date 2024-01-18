import PageLayout from "@/components/layouts/PageLayout";
import FlowWaypoints from "../FlowWaypoints";
import MediaKitCanvas from "../MediaKitCanvas";

const MediaKitEdit = () => {
  return (
    <section className="border-b border-system-foreground">
      <PageLayout>
        <div className="pt-20 lg:pt-[120px]">
          <FlowWaypoints />
          <div className="mb-10 lg:mb-16">
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
