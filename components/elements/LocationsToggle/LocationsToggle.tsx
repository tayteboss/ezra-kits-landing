import Button from "../Button";

type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const LocationsToggle = (props: Props) => {
  const { activeCategory, setActiveCategory } = props;

  return (
    <div className="flex gap-2">
      <Button
        title="Countries"
        size="small"
        theme="tiertary"
        isActive={activeCategory === "countries"}
        handleClick={() => setActiveCategory("countries")}
        useKitTheme
      />
      <Button
        title="Cities"
        size="small"
        theme="tiertary"
        isActive={activeCategory === "cities"}
        handleClick={() => setActiveCategory("cities")}
        useKitTheme
      />
    </div>
  );
};

export default LocationsToggle;
