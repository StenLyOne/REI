import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export default function Quote({}) {
  const ref = useRef<HTMLDivElement>(null);

  // 0..1 прогресс появления секции в вьюпорте
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.4 1", "1 0.4"], // настраивай зону активации
  });

  // храним число, чтобы не дергать хук в map
  const [p, setP] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setP(v));

  const text =
    "Realtors weren’t the enemy—they are simply under‑trained for investor deals. Once agents lead with numbers and a plan, investors become your most loyal, repeat clients";
  const words = text.split(" ");

  return (
    <section ref={ref} className="section-default space-y-6">
      <h2 className="h2-default text-center mx-auto max-w-[970px] leading-relaxed flex flex-wrap justify-center">
        {words.map((word, i) => {
          const compress = 0.6; // к какой доле скролла заканчиваем закрашивание

          // новые границы интервала
          const start = (i / words.length) * compress;
          const end = ((i + 1) / words.length) * compress;

          const local =
            p <= start ? 0 : p >= end ? 1 : (p - start) / (end - start);

          return (
            <span key={i} className="relative mx-1">
              <span className="text-gray-400">{word}</span>
              <span
                className="absolute left-0 top-0 gradient-text"
                style={{ opacity: local }}
              >
                {word}
              </span>
            </span>
          );
        })}
      </h2>

      <h4 className="text-[#707070] mx-auto text-center">
        — Gord Lemon, Co-Founder, REI Institute
      </h4>
    </section>
  );
}
