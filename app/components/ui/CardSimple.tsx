import Image from "next/image";

type Props = {
  title: string;
  text: string;
  imageUrl: string;
};

export default function CardSimple({ title, text, imageUrl }: Props) {
  return (
    <div className="max-w-[580px] w-full space-y-6">
      <Image
        className="w-full rounded-[20px]"
        src={imageUrl}
        alt={title}
        width={400}
        height={386}
      ></Image>
      <div className="space-y-2">
        <h3 className="text-[32px] font-semibold leading-[40px]">{title}</h3>
        <p className="p-default text-gray">{text}</p>
      </div>
    </div>
  );
}
