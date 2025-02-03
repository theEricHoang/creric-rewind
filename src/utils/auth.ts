import { betterAuth } from "better-auth";
import { Pool } from "@vercel/postgres";

export const auth = betterAuth({
    database: new Pool({

    }),
});