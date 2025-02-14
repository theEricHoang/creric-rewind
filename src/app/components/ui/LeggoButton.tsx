'use client';

import Link from "next/link";
import { motion } from 'motion/react';

export default function LeggoButton() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        className="p-2 border-white/40 border-2 shadow-md rounded-md text-3xl hover:bg-white/30"
        href="/leggo"
      >
        leggo →
      </Link>
    </motion.div>
  );
}