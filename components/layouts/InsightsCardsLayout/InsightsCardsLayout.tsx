type Props = {
  children: React.ReactNode[];
};

const InsightsCardsLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="relative">
      <div className="relative mb-2 mt-2 grid grid-cols-6 justify-center gap-1 sm:grid-cols-12">
        {children}
      </div>
    </div>
  );
};

export default InsightsCardsLayout;
