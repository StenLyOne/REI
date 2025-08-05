"use client";

import { useEffect, useState } from "react";

export default function useIsLight() {
  // 1. Начальное значение берём на клиенте, на сервере — false
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("light");
  });

  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // инициализируем сразу на случай изменения темы
    updateTheme();

    return () => observer.disconnect();
  }, []);

  return isLight;
}
