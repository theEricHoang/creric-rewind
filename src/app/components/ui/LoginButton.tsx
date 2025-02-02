"use client"

import Link from "next/link";
import { useState } from "react";

export default function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  // check login status and update button accordingly
  // if logged in, login button should redirect to blog
  // useEffect(() => {}, []);

  return (
    <Link
      className="border-white/40 rounded-md p-2 text-3xl font-bold shadow-md border hover:bg-white/30"
      href={loggedIn ? "/notes" : "/login"}
    >
      {loggedIn ? "notes" : "login"}
    </Link>
  );

}