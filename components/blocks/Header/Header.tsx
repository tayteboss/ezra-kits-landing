import LoginButton from "@/components/elements/LoginButton";
import Logo from "@/components/elements/Logo";
import PageLayout from "@/components/layouts/PageLayout";
import MenuLinks from "../MenuLinks";
import { useEffect, useState } from "react";
import useScrolled from "@/hooks/useScrolled";
import useScrollDirection from "@/hooks/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import MenuTrigger from "@/components/elements/MenuTrigger";
import Menu from "../Menu";

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [bgIsActive, setBgIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

  const hasScrolled = useScrolled({ amount: 500 });
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (!hasScrolled) {
      setMenuIsActive(false);
      setBgIsActive(false);
      return;
    }

    if (hasScrolled && scrollDirection === "up") {
      setBgIsActive(true);
      setMenuIsActive(true);
    }

    if (hasScrolled && scrollDirection === "down") {
      setBgIsActive(false);
      setMenuIsActive(false);
    }
  }, [hasScrolled, scrollDirection]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-3">
      <AnimatePresence>
        {bgIsActive && (
          <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="header-bg pointer-events-none absolute left-0 top-0 z-10 h-[100px] w-full"
          />
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <PageLayout>
          <div className="flex justify-between">
            <Logo isActive={hasScrolled} />
            <div className="z-10 flex items-center gap-4">
              <MenuLinks isActive={menuIsActive} />
              <div className="hidden md:block">
                <LoginButton />
              </div>
              <div className="z-10 md:hidden">
                <MenuTrigger
                  mobileMenuIsActive={mobileMenuIsActive}
                  setMobileMenuIsActive={setMobileMenuIsActive}
                />
              </div>
            </div>
            <Menu
              isActive={mobileMenuIsActive}
              setMobileMenuIsActive={setMobileMenuIsActive}
            />
          </div>
        </PageLayout>
      </div>
    </header>
  );
};

export default Header;
