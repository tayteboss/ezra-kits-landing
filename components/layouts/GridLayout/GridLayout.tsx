type Props = {
  children: React.ReactNode;
};

const GridLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-6 items-start gap-x-2 lg:grid-cols-12 lg:gap-x-5">
      {children}
    </div>
  );
};

export default GridLayout;
