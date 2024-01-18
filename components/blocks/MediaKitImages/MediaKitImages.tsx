import Image from "next/image";

const MediaKitImages = () => {
  return (
    <section className="mb-3">
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="w-full">
          <div className="relative w-full pt-[120%]">
            <div className="absolute inset-0 overflow-hidden rounded-[3px]">
              <Image
                src="/images/media-kit-partnership-placeholder.jpg"
                alt="Media kit hero"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full pt-[120%]">
            <div className="absolute inset-0 overflow-hidden rounded-[3px]">
              <Image
                src="/images/media-kit-profile-placeholder-2.jpg"
                alt="Media kit hero"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKitImages;
