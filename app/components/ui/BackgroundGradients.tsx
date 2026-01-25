import { motion } from "framer-motion";

const blobs = [
  { className: "bg-soft-purple", top: "-20%", right: "5%" },
  { className: "bg-soft-pink", top: "30%", right: "-5%" },
  { className: "bg-soft-blue", top: "60%", left: "-10%" },
//   { className: "bg-soft-green", top: "10%", left: "0%" },
  { className: "bg-soft-orange", bottom: "25%", right: "0%" },
  { className: "bg-soft-pink", top: "40%", left: "0%" },
  { className: "bg-soft-red", bottom: "24%", left: "-10%" },
  { className: "bg-soft-cyan", top: "70%", right: "0%" },
  { className: "bg-soft-indigo", top: "35%", left: "5%" },
  { className: "bg-soft-red", bottom: "25%", right: "10%" },
  { className: "bg-soft-rose", top: "20%", right: "5%" },
  { className: "bg-soft-violet", bottom: "30%", left: "0%" },
  { className: "bg-soft-teal", top: "55%", left: "5%" },
  { className: "bg-soft-fuchsia", top: "80%", right: "5%" },
  { className: "bg-soft-emerald", bottom: "10%", left: "0%" },
];

export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute w-[800px] h-[800px] ${b.className} rounded-full opacity-0 blur-[400px]`}
          style={{
            top: b.top,
            right: b.right,
            left: b.left,
            bottom: b.bottom,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: i * 0.2, // волна появления
          }}
        />
      ))}
    </div>
  );
}
