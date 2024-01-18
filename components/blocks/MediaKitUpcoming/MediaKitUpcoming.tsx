"use client";

import ListingCard from "@/components/elements/ListingCard";
import GridLayout from "@/components/layout/GridLayout";
import InViewLayout from "@/components/layout/InViewLayout";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import { useMediaKit } from "@/state/mediaKit";
import { Upcoming } from "@/types/mediaKit";

const MediaKitUpcoming = () => {
  const { getElement } = useMediaKit()();

  const upcoming = getElement("upcoming") as Upcoming;

  return (
    <>
      <section
        id="upcoming"
        className="mb-[60px] last-of-type:mb-0 lg:mb-[180px]"
      >
        <InViewLayout id="upcoming">
          <MediaKitHoverLayout>
            <div className="border-t-1 border-foreground pb-5" />
            <GridLayout>
              <h3 className="secondary-font colour-animation col-span-full mb-2 text-[34px] leading-tight text-foreground lg:col-span-6 lg:mb-0">
                Upcoming Dates
              </h3>
              <div className="col-span-full flex flex-col lg:col-span-6">
                {upcoming.value.payload.locations.map((item, i) => (
                  <ListingCard
                    title={item.location}
                    description={item.address}
                    date={item.date}
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

export default MediaKitUpcoming;
