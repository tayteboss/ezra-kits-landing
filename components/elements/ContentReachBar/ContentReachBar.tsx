type Props = {
  data: any; // TBC
  inView: boolean;
};

const ContentReachBar = (props: Props) => {
  const { data, inView } = props;

  return (
    <div className="w-full">
      <p className="secondary-font colour-animation mb-1 text-[12px] text-secondary">
        {data.title}
      </p>
      <div
        className="flex delay-500 duration-500"
        style={{ width: inView ? `${data.total}%` : "0%" }}
      >
        <div
          className="h-6 bg-secondary"
          style={{ width: `${data.followers}%` }}
        />
        <div
          className="h-6 bg-foreground"
          style={{ width: `${data.nonFollowers}%` }}
        />
      </div>
    </div>
  );
};

export default ContentReachBar;
