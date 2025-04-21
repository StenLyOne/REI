"use client";

import { useEffect, useRef, useState } from "react";
import GlowIcon from "@/components/GlowIcon";
import VideoModal from "@/components/VideoModal";

const videos = [
  "/videos/Stefan.mp4",
  "/videos/Stefan.mp4",
  "/videos/Stefan.mp4",
  "/videos/Stefan.mp4",
  "/videos/Stefan.mp4",
  "/videos/Stefan.mp4",
];

export default function SuccessStories() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId: number;
    let direction: "left" | "right" = "left";
    const step = 1;

    const handleScroll = () => {
      isUserScrolling.current = true;
      clearTimeout((handleScroll as any).timeout);
      (handleScroll as any).timeout = setTimeout(() => {
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
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
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
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <div className="mx-auto text-center space-y-6">
        <GlowIcon text="Success Stories" />
        <h2 className="text-[36px] font-semibold text-foreground">
          REIS Certification <span className="text-primary">Success Stories</span>
        </h2>

        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((src, i) => (
            <div
              key={i}
              className="relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setOpenVideo(src)}
            >
              <video
                src={src}
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
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div ref={scrollRef} className="sm:hidden overflow-x-auto no-scrollbar -mx-4 px-4">
          <div className="flex gap-4">
            {videos.map((src, i) => (
              <div
                key={i}
                className="min-w-full w-full relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setOpenVideo(src)}
              >
                <video
                  src={src}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={!!openVideo}
        src={openVideo ?? ""}
        onClose={() => setOpenVideo(null)}
      />
    </section>
  );
}
