type Props = {
  title: string;
  text?: string;
  imageUrl: string;
};

export default function CardImage({ title, text, imageUrl }: Props) {
  return (
    <div
      className="
    w-full space-y-6 bg-cover bg-center h-[385px] flex items-end p-5 rounded-[20px] overflow-hidden
    relative
    after:content-[''] after:absolute after:inset-0
    after:bg-gradient-to-t after:from-[#6D55ED]/70 after:to-transparent
  "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="space-y-3 relative z-10">
        <h5 className="font-bold text-white">{title}</h5>
        {text && <p className="p-default text-white">{text}</p>}
      </div>
    </div>
  );
}
