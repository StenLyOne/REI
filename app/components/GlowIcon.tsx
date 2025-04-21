export default function GlowIcon({ text }: { text: string }) {
  return (
    <div className="relative  rounded-[20px] h-[44px] mb-[12px]" >
      <div className="icon-anim-inner py-[6px] px-[6px]">
        {/* animated gradient border */}
        <div className="icon-anim-border" />
        {/* icon content */}
        <div className="flex justify-center items-center w-full h-full py-[6px] px-[12px] bg-secondary rounded-[20px]">
          <p className="text-black text-mi leading-[19px]">{text}</p>
        </div>
      </div>
    </div>
  );
}