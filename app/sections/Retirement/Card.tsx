type Props = {
  title: string;
  text: string;
  index: number;
};

export default function Card({ title, text, index }: Props) {
  return (
    <div className="w-full space-y-6 bg-cover bg-cente h-[385px] flex flex-col justify-between p-6 rounded-[20px] overflow-hidden shadow-classic bg-white">
      <p className="text-[32px] font-semibold">0{index + 1}</p>
      <div className="space-y-3">
        <h3 className="text-[36px] font-bold gradient-text text-balance">{title}</h3>
        <p className="p-default">{text}</p>
      </div>
    </div>
  );
}
