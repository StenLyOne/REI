"use client";

import { useEffect } from "react";
import { useProportions } from "@/hooks/proportions";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

export default function VideoModal({ isOpen, onClose, src }: VideoModalProps) {
  const proportions = useProportions();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative  mx-auto px-4">
        <iframe
          width={proportions.width}
          height={proportions.height}
          src={src}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute top-[0px] right-[20px] text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black"
        >
          ×
        </button>
      </div>
    </div>
  );
}
