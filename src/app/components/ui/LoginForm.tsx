"use client";
import { authClient } from "@/utils/auth-client";
import { APIError } from "better-auth/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const login = async () => {
    try {
      await authClient.signIn.username({
        username: username,
        password: password,
      }, {
        onRequest: (ctx) => {
          setIsLoading(true);
        },
        onSuccess: (ctx) => {
          router.push('/notes');
          setIsLoading(false);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setIsLoading(false);
        },
      });
    } catch (error) {
      if (error instanceof APIError) {
        console.log(error.message, error.status);
      }
    }
  }

  return (
    <form
      className="flex flex-col"
    >
      <label className="pr-2 text-white text-2xl" htmlFor="username">username</label>
      <input
        className="px-2 py-1 rounded-md border border-white text-black"
        type="text" id="username" name="username" placeholder="username" required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="pr-2 text-white text-2xl" htmlFor="password">password</label>
      <input
        className="px-2 py-1 rounded-md border border-white text-black"
        type="password" id="password" name="password" placeholder="password" required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="p-2 border-white/40 border shadow-md rounded-md text-2xl hover:bg-white/30 mt-5"
        type="submit"
        onClick={login}
        disabled={isLoading}
      >
        {isLoading ? "going..." : "go go go!!!"}
      </button>
    </form>
  );
}