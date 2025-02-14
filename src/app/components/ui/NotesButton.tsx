import Link from "next/link";
import { motion } from "motion/react";

export default function NotesButton({
  className
}: {
  className?: string
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        className={`border-white/40 inline-flex h-12 items-center justify-center rounded-md px-2 text-3xl font-bold shadow-md border hover:bg-white/30 ${className}`}
        href={"/notes"}
      >
        notes
      </Link>
    </motion.div>
  );
}