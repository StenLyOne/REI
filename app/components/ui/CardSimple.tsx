import Image from "next/image";

type Props = {
  title: string;
  titleClass?: string;
  text: string;
  textClass?: string;
  imageUrl: string;
  color?: string;
  colorText?: string;
};

export default function CardSimple({
  title,
  titleClass = "leading-[40px] text-[32px] font-semibold",
  text,
  textClass = "p-default !font-bold",
  imageUrl,
  color = " text-gray",
  colorText,
}: Props) {
  return (
    <div className="max-w-[580px] w-full space-y-7">
      <Image
        className="w-full rounded-[20px] h-[396px] object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={386}
      ></Image>
      <div className="space-y-2">
        {}
        <h3 className={`${titleClass} ${color} `}>{title}</h3>
        <p className={` ${colorText} ${textClass}`}>{text}</p>
      </div>
    </div>
  );
}
