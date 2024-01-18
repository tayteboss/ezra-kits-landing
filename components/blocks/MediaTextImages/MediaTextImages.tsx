import MediaKitSectionHeader from "@/components/elements/MediaKitSectionHeader";
import Image from "next/image";

type ContentProps = {
  header: string;
  content: string;
};

const Content = (props: ContentProps) => {
  const { header, content } = props;

  return (
    <div className="flex flex-1 flex-col items-start justify-between">
      <div>{header && <MediaKitSectionHeader title={header} />}</div>
      {content && (
        <div
          className="rich-text colour-animation secondary-font text-foreground"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

const Media = () => {
  return (
    <div className={`grid flex-1 grid-cols-1 gap-2 md:gap-5`}>
      <div className="relative col-span-1 w-full pt-[120%]">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/images/media-kit-partnership-placeholder.jpg"
            alt="Profile image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const MediaTextImages = () => {
  const title = "Lorem Ipsum";
  const content = `
    <p>Lorem ipsum dolor sit amet consectetur. Arcu enim sit consequat faucibus pellentesque dignissim tristique amet. Tincidunt sit in nullam habitant amet tempus fringilla elementum adipiscing.</p>
  `;

  return (
    <section className="mb-6">
      <div className="flex flex-col gap-10 md:flex-row">
        <Content header={title} content={content} />
        <Media />
      </div>
    </section>
  );
};

export default MediaTextImages;
