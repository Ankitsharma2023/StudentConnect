import NextAuth  from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        let existingUser = await db.user.findUnique({
          where: { email: user.email||undefined },
        });

        if (!existingUser) {
          existingUser= await db.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
            },
          });
        }

        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        token.id = existingUser ? existingUser.id : user.id;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string | null;
      }

      return session;
    },

    redirect() {
      return "/profile";
    },
  },
});
