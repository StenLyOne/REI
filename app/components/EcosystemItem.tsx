"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// глобальная переменная для накопления задержки
let globalDelay = 0;

interface EcosystemItemProps {
  rei: boolean;
  text: string;
}

export default function EcosystemItem({ rei, text }: EcosystemItemProps) {
  // при каждом рендере компонента увеличиваем глобальный delay
  globalDelay += 0.03; // например, каждый следующий +0.1 сек

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: globalDelay },
    },
  };

  return (
    <motion.div
      className="w-full flex items-center gap-[16px]"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <span
        className="w-[32px] min-w-[32px] h-[32px] min-h-[32px] flex items-center justify-center shadow-classic rounded-[20px] border-1 border-border"
        style={{ background: "var(--secondary)" }}
      >
        <Image
          src={`/icons/${rei ? "check.svg" : "cross.svg"}`}
          alt="check"
          width={19}
          height={14}
        />
      </span>
      <p className={`${rei ? "font-medium" : "font-normal"}`}>{text}</p>
    </motion.div>
  );
}
