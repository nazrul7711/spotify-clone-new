import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prismadb from "./prismaClient"
import { PrismaAdapter } from "@auth/prisma-adapter";

const authOptions: AuthOptions = {
  adapter:PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default authOptions;
