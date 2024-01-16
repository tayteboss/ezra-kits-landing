import LoginButton from "@/components/elements/LoginButton";
import MenuTrigger from "@/components/elements/MenuTrigger";
import PageLayout from "@/components/layouts/PageLayout";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-2">
      <PageLayout>
        <div className="flex justify-between">
          <MenuTrigger />
          <LoginButton />
        </div>
      </PageLayout>
    </header>
  );
};

export default Header;
