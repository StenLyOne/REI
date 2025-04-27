"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionProps {
  q: string;
  a: string;
}

export default function Question({ q, a }: QuestionProps) {
  const [open, setOpen] = useState(false);

  return (
    <dl
      className="md:max-w-[600px] bg-secondary rounded-[20px] p-[24px] pl-[20px] md:pl-[24px] pr-[12px] shadow-classic cursor-pointer transition-all duration-300 text-left border-1 border-border"
      style={{ background: "var(--secondary)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <dt className="text-[20px] font-semibold">{q}</dt>
        <div className="relative w-[48px] min-w-[48px] h-[48px] win-h-[48px] bg-background shadow-classic rounded-[20px] flex items-center justify-center border-1 border-border">
          <span
            className={`absolute w-[20px] h-[2px] bg-foreground block transition-all duration-300 ${
              open ? "rotate-0" : "rotate-90"
            }`}
          ></span>
          <span className="w-[20px] h-[2px] bg-foreground block"></span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.dd
            className="text-muted-foreground pt-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {a}
          </motion.dd>
        )}
      </AnimatePresence>
    </dl>
  );
}
