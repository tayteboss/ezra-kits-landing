"use client";

import InsightsCardWrapper from "@/components/common/InsightsCardWrapper";
import { WrapperType } from "@/components/common/InsightsCardWrapper/InsightsCardWrapper";
import InsightsCardTitle from "@/components/elements/InsightsCardTitle/InsightsCardTitle";
import InsightsLocations from "@/components/elements/InsightsLocations";
import LocationsToggle from "@/components/elements/LocationsToggle";
import { useState } from "react";

type Props = {
  rounded?: boolean;
  isActive: boolean;
  type?: WrapperType;
};

const InsightsLocationsCard = (props: Props) => {
  const { rounded, type, isActive } = props;

  const [activeCategory, setActiveCategory] = useState("countries");

  const countriesTestData = [
    { title: "United States", percentage: 52 },
    { title: "Australia", percentage: 31 },
    { title: "United Kingdom", percentage: 8 },
    { title: "Spain", percentage: 4 },
  ];

  const citiesTestData = [
    { title: "Los Angeles", percentage: 40 },
    { title: "Melbourne", percentage: 35 },
    { title: "London", percentage: 15 },
    { title: "Barcelona", percentage: 10 },
  ];

  return (
    <>
      {isActive && (
        <InsightsCardWrapper rounded={rounded} type={type}>
          <InsightsCardTitle title="Locations" />
          <div className="flex flex-col gap-4">
            <InsightsLocations
              data={
                activeCategory === "countries"
                  ? countriesTestData
                  : citiesTestData
              }
            />
            <LocationsToggle
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </InsightsCardWrapper>
      )}
    </>
  );
};

export default InsightsLocationsCard;
