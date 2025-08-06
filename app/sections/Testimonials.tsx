"use client";

import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";
import { useEffect, useRef } from "react";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";
import useIsLight from "@/hooks/useIsLight";

const screenshots = [
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/screenshots/screenshot",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isLight = useIsLight();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let framerId: number;
    let direction: "left" | "right" = "left";
    const step = 2;

    const handleScroll = () => {
      isUserScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isUserScrolling.current = false;
      }, 5);
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
    <section>
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="Testimonials"
          className="relative w-full mb-[100px] lg:mb-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div
            className="px-4 sm:px-6 lg:px-12 mb-[48px]"
            variants={itemVariants}
          >
            <GlowIcon text="Testimonials" img={false} />
            <h2 className="text-center max-w-[670px] mx-auto">
              Student Testimonials from Our{" "}
              <span className="gradient-text">
                {" "}
                Real Estate Certification Program
              </span>
            </h2>
            <p className="mx-auto text-center max-w-[800px] mt-[24px]">
              Thousands of students have transformed their financial futures
              through the REI Institute Real Estate Certification. Hear directly
              from those who built wealth, closed more deals, and gained true
              financial freedom.
            </p>
          </m.div>

          <m.div
            className="no-scrollbar relative overflow-visible "
            variants={itemVariants}
          >
            <div
              ref={scrollRef}
              className="flex gap-[24px] no-scrollbar overflow-x-auto"
              onMouseEnter={() => (isUserScrolling.current = true)}
              onMouseLeave={() => (isUserScrolling.current = false)}
            >
              {screenshots.map((item, i) => (
                <div
                  key={i}
                  className="w-[200px] h-auto md:w-[200px] lg:w-[300px] lg:h-[621px] flex-shrink-0"
                >
                  <Image
                    className="no-scrollbar w-full h-auto  object-cover "
                    src={`${item.src}-${isLight ? "light" : "dark"}.png`}
                    alt={`Testimonial from REI Institute student ${i + 1}`}
                    width={392}
                    height={312}
                    loading="lazy"
                  />
                  <div className="sr-only">{item.description}</div>
                </div>
              ))}
            </div>
          </m.div>

          <m.div
            className="absolute overflow-visible top-[0%] left-[-40%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 0.4,
                scale: 1,
                transition: { duration: 2, ease: "easeOut", delay: 1 },
              },
            }}
          ></m.div>
          <p className="sr-only">
            Read direct testimonials from students of the REI Institute
            Certification Program sharing their real experiences and investment
            success stories.
          </p>
        </m.div>
      </LazyMotion>
    </section>
  );
}
