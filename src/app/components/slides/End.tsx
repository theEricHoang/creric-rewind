'use client';

import { authClient } from "@/utils/auth-client";
import ButtonSkeleton from "../ui/ButtonSkeleton";
import NotesButton from "../ui/NotesButton";
import LoginButton from "../ui/LoginButton";

export default function End() {
  const {
    data: session,
    isPending,
  } = authClient.useSession();

  return (
    <div
      className="flex flex-col h-[100vh] bg-white items-center justify-center"
    >
      <p className="text-red-700 text-4xl text-center m-36">
        Thanks for joining me on this journey baby! I&apos;m so lucky I can call u mine and u call me yours 🥹 click the button below so we can tell each other how much we love each other ❤️
      </p>
      {
        isPending &&
        <ButtonSkeleton />
      }
      {session && !isPending &&
        <NotesButton className="bg-red-500 hover:bg-red-300" />
      }

      {!session && !isPending &&
        <LoginButton className="bg-red-500 hover:bg-red-300" />
      }
    </div>
  );
}