"use client";

import { useEffect, useRef, useState } from "react";
import GlowIcon from "@/components/GlowIcon";
import VideoModal from "@/components/VideoModal";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const videos = [
  {
    src: "https://www.youtube.com/embed/K_a9_rBL8V4?si=5QLInSQ-BhZJ1bKx&amp;clip=UgkxiM9Fb8KkQR42o5q3plkq32udBw0ULYOP&amp;clipt=EKaxBRi-pgY",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "https://www.youtube.com/embed/lpEeYwrkBPU?si=e93e5WIaVH2mKrwt",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "https://www.youtube.com/embed/9UaB1Rb5Pxc",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "https://www.youtube.com/embed/deVOSLeZ6xk",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "https://www.youtube.com/embed/KH001e0X5Lk?si=3fJbBwDsBHPiOGvQ&amp;clip=UgkxNxBL67GANcrAz4C8IMKFpE9JamlG_F2h&amp;clipt=EKKGBhi6-wY",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "https://www.youtube.com/embed/RL-5ncPdWIE?si=mRQrByHnrjRxFnt6?controls=0&modestbranding=1&rel=0",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
];

export default function SuccessStories() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId: number;
    let direction: "left" | "right" = "left";
    const step = 1;

    const handleScroll = () => {
      isUserScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isUserScrolling.current = false;
      }, 5);
    };

    container.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (!container || isUserScrolling.current) {
        frameId = requestAnimationFrame(animate);
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

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="SuccessStories"
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          className="mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div variants={itemVariants}>
            <GlowIcon text="Success Stories" img={false} />
          </m.div>

          <m.h2
            variants={itemVariants}
            className="text-[36px] font-semibold text-foreground"
          >
            REI Institute{" "}
            <span className="gradient-text"> Success Stories</span>
          </m.h2>

          {/* Desktop Videos */}
          <m.div
            className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-[48px]"
            variants={containerVariants}
          >
            {videos.map((video, i) => {
              const videoId = video.src.split("/embed/")[1].split("?")[0]; // вырезаем ID видео
              const preview = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // превью ютуба

              return (
                <m.div
                  key={i}
                  variants={itemVariants}
                  className="relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => setOpenVideo(video.src)}
                >
                  {/* Превью вместо iframe */}
                  <img
                    src={preview}
                    alt={video.description}
                    className="w-full aspect-video object-cover"
                  />

                  {/* Иконка Play */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-primary rounded-full text-white text-xl flex items-center justify-center shadow-xl">
                      <Image
                        src="/icons/play.svg"
                        alt="Play"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>

                  <div className="sr-only">{video.description}</div>
                </m.div>
              );
            })}
          </m.div>

          {/* Mobile Carousel Videos */}
          <m.div
            ref={scrollRef}
            className="sm:hidden overflow-x-auto no-scrollbar -mx-4 px-4 mt-[48px]"
            variants={containerVariants} // контейнер для карточек мобилки
          >
            <div className="flex gap-4">
              {videos.map((video, i) => {
                const videoId = video.src.split("/embed/")[1].split("?")[0]; // вырезаем ID
                const preview = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // превью YouTube

                return (
                  <m.div
                    key={i}
                    variants={itemVariants}
                    className="min-w-full w-full relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => setOpenVideo(video.src)}
                  >
                    {/* Превью вместо iframe */}
                    <img
                      src={preview}
                      alt={video.description}
                      className="w-full aspect-video object-cover"
                    />

                    {/* Иконка Play */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 bg-primary rounded-full text-white text-xl flex items-center justify-center shadow-xl">
                        ▶
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </m.div>

        <VideoModal
          isOpen={!!openVideo}
          src={openVideo ?? ""}
          onClose={() => setOpenVideo(null)}
        />
        <p className="sr-only">
          Watch success stories from certified real estate investors who
          completed the REI Institute program and achieved financial growth
          through property investing.
        </p>
      </LazyMotion>
    </section>
  );
}
