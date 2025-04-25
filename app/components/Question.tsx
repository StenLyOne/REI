"use client";

import { useState } from "react";

interface QuestionProps {
  q: string;
  a: string;
}

export default function Question({ q, a }: QuestionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="md:max-w-[600px] bg-secondary rounded-[20px] p-[24px] pl-[20px] md:pl-[24px] pr-[12px] shadow-classic cursor-pointer transition-all duration-300 text-left border-1 border-border"
      style={{ background: "var(--secondary)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="">{q}</h4>
        <div className="">
          <div className="relative w-[48px] h-[48px] bg-background shadow-classic rounded-[20px] flex items-center justify-center border-1 border-border">
            <span
              className={`absolute w-[20px] h-[2px] bg-foreground block transition-all duration-300 ${
                open ? "rotate-0" : "rotate-90"
              }`}
            ></span>
            <span className="w-[20px] h-[2px] bg-foreground block"></span>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 mt-[16px]" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground pt-1">{a}</p>
      </div>
    </div>
  );
}
