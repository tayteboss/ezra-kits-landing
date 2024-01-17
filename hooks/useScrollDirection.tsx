import { useEffect, useState } from "react";
import _ from "lodash";

type ScrollDirection = "up" | "down";

const useScrollDirection = (scrollThreshold: number = 25): ScrollDirection => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      if (isScrollingUp && scrollDirection !== "up") {
        setScrollDirection("up");
      } else if (!isScrollingUp && scrollDirection !== "down") {
        setScrollDirection("down");
      }

      setPrevScrollPos(currentScrollPos);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection, prevScrollPos]);

  return scrollDirection;
};

export default useScrollDirection;
