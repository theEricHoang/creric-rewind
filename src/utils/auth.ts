import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import { pool } from "./db";

export const auth = betterAuth({
  database: pool,
  
  plugins: [
    username(),
    nextCookies(),
  ],

  emailAndPassword: {
    enabled: true,
  },
});

export type Session = typeof auth.$Infer.Session;