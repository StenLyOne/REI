import Image from "next/image"

export default function ReiLabel() {
  return (
    <div className="relative h-[60px] py-[48px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[6px] px-[6px] rounded-[18px]">
        <div className="icon-anim-border" />
        <div className="flex justify-center items-center w-full h-full py-[6px] px-[12px] bg-secondary rounded-[20px]">
          <Image  src='/img/Logo.png' alt="REI Logo" width={214} height={23} />
        </div>
      </div>
    </div>
  );
}