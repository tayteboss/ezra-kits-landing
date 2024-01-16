type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  const { children } = props;
  return <div className="relative px-3 md:px-5">{children}</div>;
};

export default PageLayout;
