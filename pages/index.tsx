import Comparison from "@/components/blocks/Comparison";
import Hero from "@/components/blocks/Hero";
import MediaKitEdit from "@/components/blocks/MediaKitEdit";
import MediaKitReveal from "@/components/blocks/MediaKitReveal";
import MediakitInsights from "@/components/blocks/MediakitInsights";
import Steps from "@/components/blocks/Steps";

type Props = {
  data: {};
};

const Page = (props: Props) => {
  const { data } = props;

  return (
    <main className="">
      <Hero />
      <MediaKitReveal />
      <MediaKitEdit />
      <MediakitInsights />
      <Comparison />
      <Steps />
    </main>
  );
};

export async function getStaticProps() {
  const data = false;

  return {
    props: {
      data,
    },
  };
}

export default Page;
