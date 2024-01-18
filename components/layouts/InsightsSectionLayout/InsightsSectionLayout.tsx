type Props = {
  children: React.ReactNode;
  title: string;
  id: string;
  lastUpdated?: string;
};

const InsightsSectionLayout = (props: Props) => {
  const { children, title, id, lastUpdated } = props;

  return (
    <div>
      <div className="mb-2 border-t-1 border-foreground" />
      <div
        id={id || ""}
        className="mb-2 flex flex-col items-center justify-between gap-4 py-0 lg:flex-row"
      >
        <div className="flex w-full items-end justify-between">
          <h3 className="secondary-font text-center text-[14px] leading-tight text-foreground lg:text-left">
            {title}
          </h3>
          <p className="text-[8px] text-secondary">{lastUpdated || ""}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default InsightsSectionLayout;
