"use client";

import GlowIcon from "../components/GlowIcon";
import Button from "../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Section1() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme(); // init
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full mb-[100px] lg:mb-[200px]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center relative">
        {/* Левая колонка */}
        <div className="lg:max-w-[530px]">
          <div className="max-w-[125px]">
            <GlowIcon text="lorem ipsum" img={false} />
          </div>
          <div className="space-y-[24px]">
            <h2>Lorem ipsum cursus egestas libero sed</h2>
            <div className="w-full lg:hidden">
              <Image
                src="/img/section1.png"
                alt="section"
                width={900}
                height={638}
                className="rounded-[20px] w-full"
              />
            </div>
            <p>
              Lorem ipsum cursus egestas libero sed pulvinar purus nullam
              phasellus in a aliquet enim id odio ultrices viverra aliquam
              adipiscing velit justo aliquam vel non euismod pulvinar nisl neque
              sed et mi accumsan sodales ut
            </p>
          </div>
          {/* List */}
          <div className="flex gap-[22px] flex-wrap] my-[36px]">
            {[...Array(2)].map((_, col) => (
              <div key={col} className="space-y-[22px]">
                {[...Array(2)].map((_, row) => (
                  <div key={row} className="flex gap-[16px] items-center">
                    <span
                      className="w-[32px] h-[32px] flex items-center justify-center shadow-classic rounded-[20px] border border-border"
                      style={{ background: "var(--secondary)" }}
                    >
                      <Image
                        src="/icons/check.svg"
                        alt="check"
                        width={19}
                        height={14}
                      />
                    </span>
                    <p className="font-semibold">Lorem ipsum cursus</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Button />
        </div>

        {/* Правая колонка — изображение со сдвигом */}
        <div className="w-max absolute translate-x-[65%] hidden lg:block">
          <div className="relative w-[900px] h-[638px] rounded-l-[20px] overflow-hidden">
            <Image
              src="/img/section1.png"
              alt="section"
              width={900}
              height={638}
              className="rounded-l-[20px] w-full h-full object-cover"
            />
            <div
              className="absolute top-0 right-0 h-full w-[30%] pointer-events-none z-10"
              style={{
                background: isLight
                  ? "linear-gradient(to left, #f6f6f6, transparent)"
                  : "linear-gradient(to left, #0c0a20, rgba(12, 10, 32, 0.8), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
