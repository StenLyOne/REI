"use client";

import { useEffect, useRef, useState } from "react";
import GlowIcon from "@/components/GlowIcon";
import VideoModal from "@/components/VideoModal";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const videos = [
  {
    src: "/videos/forest.mp4",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/videos/forest.mp4",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/videos/forest.mp4",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/videos/forest.mp4",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/videos/forest.mp4",
    description:
      "Sopmeone shares his real estate success story with REI Institute",
  },
  {
    src: "/videos/forest.mp4",
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
      <motion.div
        className="mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <GlowIcon text="Success Stories" img={false} />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[36px] font-semibold text-foreground"
        >
          REI Institute <span className="gradient-text"> Success Stories</span>
        </motion.h2>

        {/* Desktop Videos */}
        <motion.div
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-[48px]"
          variants={containerVariants} // контейнер для карточек
        >
          {videos.map((video, i) => (
            <motion.div
              key={i}
              variants={itemVariants} // каждый элемент анимируется отдельно
              className="relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setOpenVideo(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                muted
                loop
                preload="metadata"
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-primary rounded-full text-white text-xl flex items-center justify-center shadow-xl">
                  <Image
                    src="/icons/play.svg"
                    alt="Plat"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div className="sr-only">{video.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel Videos */}
        <motion.div
          ref={scrollRef}
          className="sm:hidden overflow-x-auto no-scrollbar -mx-4 px-4 mt-[48px]"
          variants={containerVariants} // контейнер для карточек мобилки
        >
          <div className="flex gap-4">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="min-w-full w-full relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setOpenVideo(video.src)}
              >
                <video
                  src={video.src}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  loop
                  preload="metadata"
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-primary rounded-full text-white text-xl flex items-center justify-center shadow-xl">
                    ▶
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <VideoModal
        isOpen={!!openVideo}
        src={openVideo ?? ""}
        onClose={() => setOpenVideo(null)}
      />
    </section>
  );
}
