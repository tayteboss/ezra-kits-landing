import PageLayout from "@/components/layouts/PageLayout";
import { useInView } from "react-intersection-observer";
import InsightsPanel from "../InsightsPanel";
import { useEffect, useState } from "react";

const contentReachData1 = [
  {
    title: "Reels",
    followers: 50,
    nonFollowers: 50,
    total: 30,
  },
  {
    title: "Stories",
    followers: 75,
    nonFollowers: 25,
    total: 60,
  },
  {
    title: "Posts",
    followers: 82,
    nonFollowers: 18,
    total: 100,
  },
];

const contentReachData2 = [
  {
    title: "Reels",
    followers: 30,
    nonFollowers: 70,
    total: 50,
  },
  {
    title: "Stories",
    followers: 63,
    nonFollowers: 37,
    total: 40,
  },
  {
    title: "Posts",
    followers: 40,
    nonFollowers: 60,
    total: 33,
  },
];

const contentReachData3 = [
  {
    title: "Reels",
    followers: 25,
    nonFollowers: 75,
    total: 75,
  },
  {
    title: "Stories",
    followers: 32,
    nonFollowers: 68,
    total: 60,
  },
  {
    title: "Posts",
    followers: 30,
    nonFollowers: 70,
    total: 77,
  },
];

const contentReachData4 = [
  {
    title: "Reels",
    followers: 40,
    nonFollowers: 60,
    total: 50,
  },
  {
    title: "Stories",
    followers: 80,
    nonFollowers: 20,
    total: 100,
  },
  {
    title: "Posts",
    followers: 40,
    nonFollowers: 60,
    total: 90,
  },
];

const genderData1 = {
  male: 40,
  female: 60,
};

const genderData2 = {
  male: 55,
  female: 45,
};

const genderData3 = {
  male: 32,
  female: 68,
};

const genderData4 = {
  male: 20,
  female: 80,
};

const countryData1 = [
  { title: "United States", percentage: 52 },
  { title: "Australia", percentage: 31 },
  { title: "United Kingdom", percentage: 8 },
  { title: "Spain", percentage: 4 },
];

const countryData2 = [
  { title: "United Kingdom", percentage: 40 },
  { title: "Germany", percentage: 27 },
  { title: "Netherlands", percentage: 23 },
  { title: "Denmark", percentage: 10 },
];

const countryData3 = [
  { title: "China", percentage: 73 },
  { title: "Vietnam", percentage: 17 },
  { title: "Australia", percentage: 5 },
  { title: "Indonesia", percentage: 5 },
];

const countryData4 = [
  { title: "Mexico", percentage: 40 },
  { title: "Agentina", percentage: 30 },
  { title: "Mexico", percentage: 20 },
  { title: "Brazil", percentage: 10 },
];

const ageData1 = {
  all: [
    { percentage: 10, stat: 200000, highest: false },
    { percentage: 20, stat: 461000, highest: false },
    { percentage: 60, stat: 546000, highest: true },
    { percentage: 10, stat: 135000, highest: false },
  ],
};

const ageData2 = {
  all: [
    { percentage: 18, stat: 200000, highest: false },
    { percentage: 28, stat: 461000, highest: false },
    { percentage: 30, stat: 546000, highest: true },
    { percentage: 24, stat: 135000, highest: false },
  ],
};

const ageData3 = {
  all: [
    { percentage: 11, stat: 200000, highest: false },
    { percentage: 39, stat: 461000, highest: true },
    { percentage: 28, stat: 546000, highest: false },
    { percentage: 22, stat: 135000, highest: false },
  ],
};

const ageData4 = {
  all: [
    { percentage: 0, stat: 200000, highest: false },
    { percentage: 11, stat: 461000, highest: false },
    { percentage: 31, stat: 546000, highest: false },
    { percentage: 50, stat: 135000, highest: true },
  ],
};

const MediakitInsights = () => {
  const [followers, setFollowers] = useState(5301);
  const [engagementRate, setEngagementRate] = useState(86);
  const [views, setViews] = useState(5301);
  const [contentReach, setContentReach] = useState(contentReachData1);
  const [gender, setGender] = useState(genderData1);
  const [countries, setCountries] = useState(countryData1);
  const [age, setAge] = useState(ageData1);
  const [changeData, setChangeData] = useState(0);
  const [loop, setLoop] = useState(1);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleDataLoop = () => {
    if (loop === 1) {
      setContentReach(contentReachData2);
      setAge(ageData2);
      setGender(genderData2);
      setCountries(countryData2);
      setLoop(2);
    } else if (loop === 2) {
      setContentReach(contentReachData3);
      setAge(ageData3);
      setGender(genderData3);
      setCountries(countryData3);
      setLoop(3);
    } else if (loop === 3) {
      setContentReach(contentReachData4);
      setAge(ageData4);
      setGender(genderData4);
      setCountries(countryData4);
      setLoop(4);
    } else if (loop === 4) {
      setContentReach(contentReachData1);
      setAge(ageData1);
      setGender(genderData1);
      setCountries(countryData1);
      setLoop(1);
    }
  };

  useEffect(() => {
    setFollowers(randomIntFromInterval(5000, 2000000));
    setEngagementRate(randomIntFromInterval(50, 95));
    setViews(randomIntFromInterval(5000, 5000000));
    handleDataLoop();
  }, [changeData]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <section className="border-b border-system-foreground">
      <PageLayout>
        <div className="py-20 lg:py-[120px]">
          <div
            className={`view-element-fade-in mb-10 flex flex-col items-center lg:mb-16 ${
              inView ? "view-element-fade-in--in-view" : ""
            }`}
          >
            <h2 className="title-style text-center" ref={ref}>
              Update with a click.
            </h2>
            <h2 className="title-style mb-3 text-center font-gtAplinaStandardLightItalic md:mb-5">
              Save hours.
            </h2>
            <p className="mb-6 text-center text-[20px] text-system-secondary md:mb-10">
              No more screenshots.
            </p>
            <button
              className="rounded-full bg-system-accent px-20 py-3 text-center text-[20px] text-system-foreground"
              onClick={() => setChangeData(changeData + 1)}
            >
              Update
            </button>
          </div>
          <InsightsPanel
            followersData={followers}
            engagementRateData={engagementRate}
            viewsData={views}
            contentReachData={contentReach}
            genderData={gender}
            countriesData={countries}
            ageData={age}
            loop={loop}
          />
        </div>
      </PageLayout>
    </section>
  );
};

export default MediakitInsights;
