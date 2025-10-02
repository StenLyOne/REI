import Image from "next/image";

type Props = {
  stat: string;
  text: string;
  name?: string;
  imageUrl: string;
  color: string;
};

export default function CardHorizontal({
  stat,
  text,
  name,
  imageUrl,
  color,
}: Props) {
  return (
    <div
      className={`w-full h-screen shadow-[0_-2px_4px_rgba(0,0,0,0.09)] md:shadow-none md:h-auto flex justify-between rounded-[20px] ${color}  border border-gray-200 overflow-hidden`}
    >
      <div className="text-center md:text-left w-full md:w-1/2 min-[800]:min-w-[507px] space-y-3 px-10 md:px-0 md:pl-10 md:pr-6 py-10 md:py-4 flex items-center md:items-start justify-center flex-col">
        <div className="space-y-6 flex flex-col md:items-start items-center">
          <h3 className=" text-[80px] leading-[92px] gradient-text font-bold">
            {stat}
          </h3>
          <h4 className="w-4/5 md:w-full text-[24px] leading-[32px] md:text-[32px] md:leading-[40px]">
            {text}
          </h4>
        </div>
        <h5 className="text-[#707070] font-medium">{name}</h5>
      </div>
      <div className="hidden md:block relative w-[713px] h-[581px]">
        <Image
          className="w-full h-full object-cover right-0 top-0 absolute"
          src={imageUrl}
          alt={`${stat} ${text}`}
          width={713}
          height={581}
        ></Image>
      </div>
    </div>
  );
}
