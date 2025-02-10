"use client";

import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <motion.button
      className="border-white/40 inline-flex h-12 items-center justify-center rounded-md px-2 text-3xl font-bold shadow-md border hover:bg-white/30"
      onClick={handleLogout}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      logout
    </motion.button>
  );
}