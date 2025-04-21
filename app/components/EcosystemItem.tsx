import Image from "next/image";

interface EcosystemItemProps {
  rei: boolean;
  text: string;
}

export default function EcosystemItem({ rei, text }: EcosystemItemProps) {
  return (
    <div className="w-full flex items-center gap-[16px]">
      <span className="w-[32px] min-w-[32px] h-[32px] min-h-[32px] flex items-center justify-center bg-secondary shadow-classic rounded-[20px]">
        <Image
          src={`/icons/${rei ? "check.svg" : "cross.svg"}`}
          alt="check"
          width={19}
          height={14}
        />
      </span>
      <p className={`${rei ? "font-medium" : "font-normal"} `}>{text}</p>
    </div>
  );
}
