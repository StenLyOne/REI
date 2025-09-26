type Props = {
  title: string;
  text?: string;
  imageUrl: string;
};

export default function CardImage({ title, text, imageUrl }: Props) {
  return (
    <div
      className="w-full space-y-6 bg-cover bg-cente h-[385px] flex items-end p-5 rounded-[20px] overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="space-y-3">
        <h5 className="font-bold text-white">{title}</h5>
        {text && <p className="p-default text-white">{text}</p>}
      </div>
    </div>
  );
}
