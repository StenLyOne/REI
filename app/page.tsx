"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeContent from "./components/HomeContent";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 50);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          className="flex items-center justify-center w-screen h-screen bg-black text-white text-2xl fixed top-0 left-0 z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LoadingDots />
        </motion.div>
      ) : (
        <HomeContent />
      )}
    </>
  );
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      Loading
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
      >
        .
      </motion.span>
    </div>
  );
}
