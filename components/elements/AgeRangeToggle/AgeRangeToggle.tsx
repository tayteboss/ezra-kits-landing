import Button from "../Button";

type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const AgeRangeToggle = (props: Props) => {
  const { activeCategory, setActiveCategory } = props;

  return (
    <div className="flex gap-2">
      <Button
        title="All"
        size="small"
        theme="tiertary"
        isActive={activeCategory === "all"}
        handleClick={() => setActiveCategory("all")}
        useKitTheme
      />
      <Button
        title="Male"
        size="small"
        theme="tiertary"
        isActive={activeCategory === "male"}
        handleClick={() => setActiveCategory("male")}
        useKitTheme
      />
      <Button
        title="Female"
        size="small"
        theme="tiertary"
        isActive={activeCategory === "female"}
        handleClick={() => setActiveCategory("female")}
        useKitTheme
      />
    </div>
  );
};

export default AgeRangeToggle;
