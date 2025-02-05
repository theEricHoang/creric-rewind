"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";
import NotesButton from "./NotesButton";
import LogoutButton from "./LogoutButton";
import { authClient } from "@/utils/auth-client";

export default function NavBar() {
  const {
    data: session,
    isPending,
    error
  } = authClient.useSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md p-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="font-bold text-5xl" href="/">
          creric rewind ♥
        </Link>
        
        {session
          ? (
            <div className="flex gap-2">
              <NotesButton />
              <LogoutButton />
            </div>
          )
          : <LoginButton />}
      </div>
    </nav>
  );
}