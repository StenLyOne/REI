"use client";

import { useEffect, useState } from "react";

export function useProportions() {
  const [proportions, setProportions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth * 0.8;
      const h = window.innerHeight * 0.8;
      setProportions({ width: w, height: h });
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
  }, []);

  return proportions;
}
