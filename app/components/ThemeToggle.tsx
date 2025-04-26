"use client";

import { img } from "framer-motion/client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-lg text-[30px] cursor-pointer"
    >
      {theme === "light" ? (
        <img
          className="w-[32px] h-[32px]"
          src="/icons/moon.svg"
          alt="Moon Icon"
        />
      ) : (
        <img
          className="w-[32px] h-[32px]"
          src="/icons/sun.svg"
          alt="Sun Icon"
        />
      )}
    </button>
  );
}
