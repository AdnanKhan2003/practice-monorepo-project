import { betterAuth } from "better-auth";
import { accounts, db, sessions, users, verifications } from "@repo/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { toNodeHandler } from "better-auth/node";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: users,
      session: sessions,
      account: accounts,
      verification: verifications,
    },
  }),
  baseURL: "http://localhost:5000",
  trustedOrigins: ["http://localhost:3000"],
  emailAndPassword: {
    enabled: true,
  },
});

export const authHandler = toNodeHandler(auth);
