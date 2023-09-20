import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prismadb from "./prismaClient";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw Error("provide email or password");
        }
        let existingUser = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!existingUser) {
          throw Error("No such user with this email");
        }

        if (existingUser.hashedPassword) {
          let ifPasswordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          console.log(ifPasswordMatch);
          if (!ifPasswordMatch) {
            throw Error("Password does not match");
          }
        }

        return existingUser;
      },
    }),
  ],
  session: { strategy: "jwt" }
};

export default authOptions;
