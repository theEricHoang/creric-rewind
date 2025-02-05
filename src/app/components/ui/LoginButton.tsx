import Link from "next/link";

export default function LoginButton() {

  return (
    <Link
      className="border-white/40 inline-flex h-12 items-center justify-center rounded-md px-2 text-3xl font-bold shadow-md border hover:bg-white/30"
      href={"/login"}
    >
      login
    </Link>
  );

}