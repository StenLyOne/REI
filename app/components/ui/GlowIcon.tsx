
import Image from "next/image";

export default function GlowIcon({
  text,
  img,
  video,
}: {
  text: string;
  img?: boolean;
  video?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[20px] ${
        img || video? "w-[78px] h-[78px]" : "h-[44px] mb-[12px]"
      }`}
    >
      <div className="icon-anim-inner py-[6px] px-[6px]">
        {/* animated gradient border */}
        <div className="icon-anim-border" />
        {/* icon content */}
        <div
          className={`flex justify-center items-center w-full h-full ${
            img || video ? "p-[0px] min-w-[66px] min-h-[66px]" : "py-[6px] px-[12px]"
          } bg-white rounded-[10px] `}
          style={{ boxShadow: "0px 0px 20px 0px rgba(208, 208, 208, 0.6)" }}
        >
          <p
            className={`text-black text-mi leading-[19px] whitespace-nowrap ${
              img || video ? "hidden" : ""
            }`}
          >
            {text}
          </p>
          {img && <Image src={text} alt={text} width={50} height={50} />}
          {video && (
            <video
              src={text}
              width={50}
              height={50}
              autoPlay
              loop
              muted
              playsInline
              className="w-[50px] h-[50px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
