export default function GlowIcon({
  text,
  img,
}: {
  text: string;
  img: boolean;
}) {
  return (
    <div
      className={`relative rounded-[20px] ${
        img ? "w-[78px] h-[78px]" : "h-[44px] mb-[12px]"
      }`}
    >
      <div className="icon-anim-inner py-[6px] px-[6px]">
        {/* animated gradient border */}
        <div className="icon-anim-border" />
        {/* icon content */}
        <div
          className={`flex justify-center items-center w-full h-full ${
            img ? "p-[0px] min-w-[66px] min-h-[66px]" : "py-[6px] px-[12px]"
          } bg-white rounded-[10px] `}
          style={{ boxShadow: "0px 0px 20px 0px rgba(208, 208, 208, 0.6)" }}
        >
          <p
            className={`text-black text-mi leading-[19px] whitespace-nowrap ${
              img ? "hidden" : ""
            }`}
          >
            {text}
          </p>
          <img
            className={`${img ? "" : "hidden"}`}
            src={text}
            alt={text}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
