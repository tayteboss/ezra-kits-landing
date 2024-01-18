"use client";

import { useState } from "react";
import AgeRangeChart from "../AgeRangeChart";
import AgeRangeToggle from "../AgeRangeToggle";

const InsightsAgeRange = (props: all) => {
  const { data } = props;

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-1 flex-col justify-end">
      <AgeRangeChart data={data[activeCategory]} />
      {/* <AgeRangeToggle
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      /> */}
    </div>
  );
};

export default InsightsAgeRange;
