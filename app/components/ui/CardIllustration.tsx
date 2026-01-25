// import Image from "next/image";

type Props = {
  title: string;
  text?: string;
  imageUrl: string;
};

export function CardIllustration({ title, text, imageUrl }: Props) {
  return (
    <div className="flex flex-col justify-between items-center h-full px-6 pt-6 shadow-classic rounded-[20px] bg-white">
      <div className="space-y-3 mb-5 w-full">
        <h5 className="font-semibold leading-[28px]">{title}</h5>
        {text && <p className="">{text}</p>}
      </div>
      <img
        className="max-w-full max-h-[150px] object-contain"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}
