type Props = {
  data: any; // TBC
  inView: boolean;
};

const ContentReachBar = (props: Props) => {
  const { data, inView } = props;

  return (
    <div className="w-full">
      <p className="mb-1 font-twkLausanne450 text-[10px]">{data.title}</p>
      <div
        className="flex delay-500 duration-500"
        style={{ width: inView ? `${data.total}%` : "0%" }}
      >
        <div
          className="h-[18px] bg-system-secondary duration-500"
          style={{ width: `${data.followers}%` }}
        />
        <div
          className="h-[18px] bg-system-foreground duration-500"
          style={{ width: `${data.nonFollowers}%` }}
        />
      </div>
    </div>
  );
};

export default ContentReachBar;
