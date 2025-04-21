"use client";

import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

export default function VideoModal({ isOpen, onClose, src }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <video
          src={src}
          controls
          autoPlay
          className="rounded-lg w-full h-auto max-h-[80vh] shadow-2xl"
        />
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
