const MenuTrigger = (props) => {
  const { mobileMenuIsActive, setMobileMenuIsActive } = props;

  return (
    <button
      onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}
      className="rounded-full border-1 border-system-foreground bg-system-background px-3 py-[2px] font-twkLausanne450 text-[16px] duration-250 hover:bg-system-accent"
    >
      {mobileMenuIsActive ? "Close" : "Menu"}
    </button>
  );
};

export default MenuTrigger;
