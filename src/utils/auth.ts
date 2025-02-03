import { betterAuth } from "better-auth";
import { Pool } from "@vercel/postgres";

export const auth = betterAuth({
  database: new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
  }),
});