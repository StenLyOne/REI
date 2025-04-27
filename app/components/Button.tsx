export default function Button() {
  return (
    <a
      href="https://calendar.rei.institute/#/discoverycall"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-max bg-primary text-white py-[12px] pl-[20px] pr-[12px] rounded-full flex items-center gap-4 font-semibold glow cursor-pointer"
    >
      Become an REI Investor
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
    </a>
  );
}
