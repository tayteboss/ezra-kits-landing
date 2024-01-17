import Comparison from "@/components/blocks/Comparison";
import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
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
    <>
      <Header />
      <main className="bg-system-light min-h-[300vh]">
        <Hero />
        <MediaKitReveal />
        <MediaKitEdit />
        <MediakitInsights />
        <Comparison />
        <Steps />
      </main>
      <Footer />
    </>
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
