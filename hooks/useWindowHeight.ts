"use client";

import { useState, useEffect } from "react";

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Initial window height
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowHeight;
};

export default useWindowHeight;

// Usage
// const ref = useRef<HTMLDivElement>(null);

// const windowHeight = useWindowHeight();
// const distanceToTop = useDistanceToTop(ref);
