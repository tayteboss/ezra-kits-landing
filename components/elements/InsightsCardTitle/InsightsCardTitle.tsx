type Props = {
  title?: string;
};

const InsightsCardTitle = (props: Props) => {
  const { title = "" } = props;

  return (
    <div className="items-left flex flex-col justify-start">
      <span className="secondary-font colour-animation text-[6px] text-secondary">
        {title}
      </span>
    </div>
  );
};

export default InsightsCardTitle;
