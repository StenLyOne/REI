import Image from "next/image";

type Props = {
  title: string;
  text: string;
  imageUrl: string;
  color?: string;
  colorText?: string;
};

export default function CardSimple({
  title,
  text,
  imageUrl,
  // color,
  colorText,
}: Props) {
  return (
    <div className="max-w-[580px] w-full space-y-7">
      <Image
        className="w-full rounded-[20px]"
        src={imageUrl}
        alt={title}
        width={400}
        height={386}
      ></Image>
      <div className="space-y-2">
        <h3 className={`text-[32px] font-semibold text-white leading-[40px] `}>
          {title}
        </h3>
        <p className={`p-default text-gray ${colorText} !font-bold `}>{text}</p>
      </div>
    </div>
  );
}
