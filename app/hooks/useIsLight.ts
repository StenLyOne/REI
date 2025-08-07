"use client";

import { useEffect, useState } from "react";

export default function useIsLight() {
  const [isLight, setIsLight] = useState<boolean | null>(null); // NULL изначально!

  useEffect(() => {
    const updateTheme = () => {
      const isLightMode = document.documentElement.classList.contains("light");
      setIsLight(isLightMode);
    };

    updateTheme(); // сразу чек

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isLight; // теперь в компоненте ты можешь писать: if (isLight === null) return null;
}
