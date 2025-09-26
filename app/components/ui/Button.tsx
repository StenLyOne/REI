type Props = { link?: string; label?: string; primary?: boolean };

export default function Button({
  link = "https://calendar.rei.institute/#/discoverycall",
  label = "Book a Free Strategy Call",
  primary = true,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-max  py-[12px] pl-[20px] ${
        primary
          ? " bg-primary text-white pr-3"
          : "group-hover:text-white bg-white text-primary pr-5"
      } rounded-full flex items-center gap-4 font-semibold glow cursor-pointer`}
    >
      {label}
      {primary && (
        <span className="relative w-[36px] h-[36px] rounded-full bg-white overflow-hidden flex justify-center items-center shrink-0">
          <img
            src="/icons/arrow.svg"
            alt="Arrow Icon"
            className="absolute transition-all duration-300 transform group-hover:-translate-y-full group-hover:opacity-0"
          />
          <img
            src="/icons/arrow.svg"
            alt="Arrow Icon"
            className="absolute transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </span>
      )}
    </a>
  );
}
