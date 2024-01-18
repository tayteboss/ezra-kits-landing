import React, { useRef } from "react";
import RevealContentScroll from "./RevealContentScroll";
import RevealMediaKitScroll from "./RevealMediaKitScroll";
import useDistanceToTop from "@/hooks/useDistanceToTop";
import useWindowHeight from "@/hooks/useWindowHeight";

const MediaKitReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  const windowHeight = useWindowHeight();
  const distanceToTop = useDistanceToTop(ref);

  return (
    <section className="relative border-b border-system-foreground">
      <div className="relative h-[900vh]">
        <div
          ref={ref}
          className="sticky top-0 flex h-[100vh] flex-col lg:flex-row"
        >
          <RevealMediaKitScroll
            windowHeight={windowHeight}
            distanceToTop={distanceToTop}
          />
          <RevealContentScroll
            windowHeight={windowHeight}
            distanceToTop={distanceToTop}
          />
        </div>
      </div>
    </section>
  );
};

export default MediaKitReveal;
