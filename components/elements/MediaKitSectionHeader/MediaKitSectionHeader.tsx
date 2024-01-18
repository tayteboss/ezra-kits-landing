type Props = {
  title: string;
};

const MediaKitSectionHeader = (props: Props) => {
  const { title } = props;

  return (
    <>
      {title && (
        <div className="primary-font font-case-styling colour-animation mb-1 text-[12px] leading-tight text-system-foreground">
          {title}
        </div>
      )}
    </>
  );
};

export default MediaKitSectionHeader;
