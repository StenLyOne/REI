"use client";

import GlowIcon from "@/components/GlowIcon";
import { div, section } from "motion/react-client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const screenshots = [
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let framerId: number;
    let direction: "left" | "right" = "left";
    const step = 2;

    const handleScroll = () => {
      isUserScrolling.current = true;
      clearTimeout((handleScroll as any).timeout);
      (handleScroll as any).timeout = setTimeout(() => {
        isUserScrolling.current = false;
      }, 10);
    };

    container.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (!container) return;

      if (isUserScrolling.current) {
        framerId = requestAnimationFrame(animate); // 🔁 если хочешь просто приостановить и продолжить
        return;
      }

      if (direction === "left") {
        container.scrollLeft += step;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          direction = "right";
        }
      } else {
        container.scrollLeft -= step;
        if (container.scrollLeft <= 0) {
          direction = "left";
        }
      }

      framerId = requestAnimationFrame(animate);
    };
    framerId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(framerId);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full py-12 space-y-[48px]">
      <div className="px-4 sm:px-6 lg:px-12">
        <GlowIcon text="Testimonials" />
        <h2 className="text-center">REIS Certification  Success Stories</h2>
      </div>
      <div className="no-scrollbar relative overflow-visible">
        <div
          ref={scrollRef}
          className="flex gap-[24px] no-scrollbar overflow-x-auto"
          onMouseEnter={() => (isUserScrolling.current = true)}
          onMouseLeave={() => (isUserScrolling.current = false)}
        >
          {screenshots.map((item, i) => (
            <Image
              key={i}
              className="no-scrollbar w-[60%] h-auto md:w-[200px] md:h-[414px] lg:w-[300px] lg:h-[621px] flex-shrink-0"
              src={`${item}.png`}
              alt={`screenshot-${i}`}
              width={392}
              height={312}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
