"use client";

import HeroSection from "@/sections/HeroSection";
import Header from "./sections/Header";
import HowReiWorks from "./sections/HowReiWorks";
import Benefits from "./sections/Benefits";
import SuccessStories from "./sections/SuccessStories";
import Testimonials from "./sections/Testimonials";
import WhoSItFor from "./sections/WhoSItFor";
import Ecosystem from "./sections/Ecosystem";
import Founders from "./sections/Founders";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Section1 from "./sections/WhatYouLearn";
import Section2 from "./sections/StartHere";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Небольшая задержка для более естественного исчезновения
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="flex items-center justify-center w-screen h-screen bg-black text-white text-2xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LoadingDots />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="overflow-hidden">
          <Header />
          <HeroSection />
          <HowReiWorks />
          <Benefits />
          <SuccessStories />
          <WhoSItFor />
          <Testimonials />
          <Ecosystem />
          <Founders />
          <Section1 />
          <Section2 />
          <FAQ />
          <CTA />
          <Footer />
        </div>
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
