"use client";

import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  images: string[];
  title: string;
  id: number;
}

export default function ƒFeatureCard({
  icon,
  images,
  title,
  id,
}: FeatureCardProps) {
  return (
    <div
      id={id.toString()}
      className="hover:-translate-y-3 hover:scale-[1.1] duration-200 z-10   flex flex-col items-center text-center space-y-3"
    >
      <div className="flex -space-x-3 mb-[-15px] translate-y-1/4">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`preview-${i}`}
            width={50}
            height={50}
            className={`rounded-[10px] w-[40px] min-w-[40px] h-[40px] min-h-[40px]} ${
              i === 1 ? "-translate-y-1/3" : ""
            }`}
          />
        ))}
      </div>

      <div className="w-max h-max bg-primary rounded-[20px] p-[12px] z-1 shadow-primaryy">
        <Image src={icon} alt="icon" width={32} height={32} />
      </div>

      <p className="text-foreground leading-tight max-w-[104px] font-bold! ">
        {title}
      </p>
    </div>
  );
}
