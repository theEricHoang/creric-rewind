import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  
  plugins: [
    username(),
    nextCookies(),
  ],

  emailAndPassword: {
    enabled: true,
  },
});

export type Session = typeof auth.$Infer.Session;