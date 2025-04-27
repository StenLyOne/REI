import Image from "next/image";

export default function ReiLabel() {
  return (
    <div className="relative h-[60px] py-[48px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[6px] px-[6px] rounded-[18px]">
        <div className="icon-anim-border" />
        <div className="flex justify-center items-center w-full h-full py-[6px] px-[12px] rounded-[20px] ">
          <p
            className="text-[26px] font-bold color-primary whitespace-nowrap"
            style={{ color: "var(--color-primary)" }}
          >
            REI INSTITUTE
          </p>
        </div>
      </div>
    </div>
  );
}
