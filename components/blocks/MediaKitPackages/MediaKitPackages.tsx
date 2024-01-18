"use client";

import ListingCard from "@/components/elements/ListingCard";
import GridLayout from "@/components/layout/GridLayout";
import InViewLayout from "@/components/layout/InViewLayout";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import { useMediaKit } from "@/state/mediaKit";
import { Packages } from "@/types/mediaKit";

const MediaKitPackages = () => {
  const { getElement } = useMediaKit()();

  const packages = getElement("packages") as Packages;

  return (
    <>
      <section
        id="packages"
        className="mb-[60px] last-of-type:mb-0 lg:mb-[140px]"
      >
        <InViewLayout id="packages">
          <MediaKitHoverLayout>
            <div className="mb-5 border-t-1 border-foreground" />
            <GridLayout>
              <h3 className="secondary-font colour-animation col-span-full mb-2 text-[34px] leading-tight text-foreground lg:col-span-6 lg:mb-0">
                Packages
              </h3>
              <div className="col-span-full flex flex-col lg:col-span-6">
                {packages.value.payload.packages.map((item, i) => (
                  <ListingCard
                    title={item.title}
                    description={item.description}
                    date={null}
                    key={i}
                  />
                ))}
              </div>
            </GridLayout>
          </MediaKitHoverLayout>
        </InViewLayout>
      </section>
    </>
  );
};

export default MediaKitPackages;
