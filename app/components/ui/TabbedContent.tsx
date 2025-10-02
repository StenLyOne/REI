"ule client";

import { useEffect, useRef, useState } from "react";
import { item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  imageUrl: string;
  text?: string;
};

type Props = {
  data: Array<{
    label: string;
    cards: CardProps[];
  }>;
  cardComponent: React.ComponentType<CardProps>;
};

export default function TabbedContent({ data, cardComponent: Card }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const labels = data.map((item) => item.label);
  return (
    <div>
      <motion.div
        variants={item}
        className="overflow-x-auto whitespace-nowrap -mx-4 px-4 py-2"
      >
        <Tab labels={labels} onChange={setActiveTab} activeIndex={activeTab} />
      </motion.div>

      <div className="grid">
        {data.map((ele, i) => (
          <div
            key={i}
            className={`col-start-1 row-start-1 transition-opacity duration-300
        ${i === activeTab ? "z-10 opacity-100" : "z-0 opacity-0 hidden"}
      `}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
              {ele.cards.map((card, j) => (
                <motion.div variants={item} key={j}>
                  <Card {...card} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tab({
  labels,
  onChange,
  activeIndex = 0,
}: {
  labels?: string[];
  onChange: (i: number) => void;
  activeIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const btn = containerRef.current.querySelectorAll("button")[activeIndex];
      if (btn) {
        const { offsetLeft, offsetWidth } = btn as HTMLButtonElement;
        setHighlightStyle({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeIndex, labels]);
  return (
    <div
      ref={containerRef}
      className="relative mb-5 md:mb-6 p-2 w-max mx-auto shadow-classic bg-white rounded-full flex gap-5"
    >
      {/* фиолетовый бегунок */}
      <span
        className="absolute top-2 bottom-2 rounded-full bg-purple-500 transition-all duration-300"
        style={{
          left: highlightStyle.left,
          width: highlightStyle.width,
        }}
      />

      {labels?.map((label, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`relative z-10 px-6 py-2 transition-all cursor-pointer ${
            activeIndex === i ? "text-white font-bold" : "text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
