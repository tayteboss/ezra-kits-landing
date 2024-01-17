import DescriptionCell from "./DescriptionCell";
import HeroCell from "./HeroCell";

const Hero = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid h-[100vh] grid-cols-3">
        <HeroCell />
        <HeroCell letter="E" leftAlign />
        <HeroCell letter="Z" />
        <HeroCell letter="R" />
        <HeroCell letter="A" />
        <HeroCell />
      </div>
      <div className="col-span-1 h-full">
        <DescriptionCell
          noBorderRight
          description="Media kits for for fashion, beauty and lifestyle influencers."
        />
      </div>
    </div>
  );
};

export default Hero;
