const MediaKitBio = () => {
  const bio = `
    <p>Lorem ipsum dolor sit amet consectetur. Arcu enim sit consequat faucibus pellentesque dignissim tristique amet. Tincidunt sit in nullam habitant amet tempus fringilla elementum adipiscing.</p>
    <p>Risus sollicitudin malesuada id tincidunt. Facilisis magna egestas venenatis convallis magna massa sollicitudin eros. Lorem ipsum dolor sit amet consectetur. Arcu enim sit consequat faucibus pellentesque dignissim tristique amet.</p>
  `;

  return (
    <section className="bio-container mb-8">
      <div className="text-foreground duration-300">
        <div className="rich-text pr-none lg:pr-[50%]">
          <div
            className="rich-text-secondary-font"
            dangerouslySetInnerHTML={{ __html: bio }}
          />
        </div>
      </div>
    </section>
  );
};

export default MediaKitBio;
