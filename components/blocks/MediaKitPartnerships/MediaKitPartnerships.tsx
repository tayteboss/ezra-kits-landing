"use client";

import InViewLayout from "@/components/layout/InViewLayout";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import { useMediaKit } from "@/state/mediaKit";
import PastPartnerShipCard from "../PastPartnerShipCard";
import { Partnerships } from "@/types/mediaKit";

const MediaKitPartnerships = () => {
  const { getElement } = useMediaKit()();

  const partnerships = getElement("partnerships") as Partnerships;
  const [first, second, third] = partnerships.value.payload.partnerships;

  return (
    <>
      <section id="partnerships" className="mb-10 lg:mb-[180px]">
        <InViewLayout id="partnerships">
          <MediaKitHoverLayout>
            <div className="border-t-1 border-foreground py-5">
              <h3 className="secondary-font colour-animation text-[34px] leading-tight text-foreground">
                Past Partnerships
              </h3>
            </div>
            <div className="grid grid-cols-1 justify-start gap-4 sm:grid-cols-3">
              <PastPartnerShipCard {...first} />
              <PastPartnerShipCard {...second} />
              <PastPartnerShipCard {...third} />
            </div>
          </MediaKitHoverLayout>
        </InViewLayout>
      </section>
    </>
  );
};

export default MediaKitPartnerships;
