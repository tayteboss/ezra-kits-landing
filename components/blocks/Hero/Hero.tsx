import DescriptionCell from "./DescriptionCell";
import HeroCell from "./HeroCell";

const Hero = () => {
  return (
    <section className="grid grid-cols-4">
      <div className="col-span-full hidden h-[100vh] grid-cols-3 md:col-span-3 md:grid">
        <HeroCell />
        <HeroCell letter="E" leftAlign />
        <HeroCell letter="Z" />
        <HeroCell letter="R" />
        <HeroCell letter="A" />
        <HeroCell />
      </div>
      <div className="col-span-full grid h-[75vh] grid-cols-3 md:col-span-3 md:hidden">
        <HeroCell letter="E" leftAlign />
        <HeroCell letter="Z" />
        <HeroCell />
        <HeroCell />
        <HeroCell letter="R" />
        <HeroCell letter="A" />
      </div>
      <div className="col-span-full h-[25vh] md:col-span-1 md:h-full">
        <DescriptionCell
          noBorderRight
          description="Media kits for for fashion, beauty and lifestyle influencers."
        />
      </div>
    </section>
  );
};

export default Hero;
