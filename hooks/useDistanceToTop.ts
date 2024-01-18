"use client";

import { useEffect, useState } from "react";

const useDistanceToTop = (ref: React.RefObject<HTMLDivElement>) => {
  const [distanceToTop, setDistanceToTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleDistance = () => {
      setDistanceToTop(ref.current.offsetTop);
    };

    // Initial distance to top
    handleDistance();

    window.addEventListener("resize", handleDistance);

    return () => {
      window.removeEventListener("resize", handleDistance);
    };
  }, [ref]);

  return distanceToTop;
};

export default useDistanceToTop;

// Usage
// const ref = useRef<HTMLDivElement>(null);

// const windowHeight = useWindowHeight();
// const distanceToTop = useDistanceToTop(ref);
