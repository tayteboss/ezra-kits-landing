import React from "react";
import RevealContentScroll from "./RevealContentScroll";
import RevealMediaKitScroll from "./RevealMediaKitScroll";

const MediaKitReveal = () => {
  return (
    <div className="relative border-b border-system-foreground">
      <div className="relative h-[900vh]">
        <div className="sticky top-0 flex h-[100vh]">
          <RevealMediaKitScroll />
          <RevealContentScroll />
        </div>
      </div>
    </div>
  );
};

export default MediaKitReveal;
