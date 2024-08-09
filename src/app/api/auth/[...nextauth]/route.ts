import NextAuth, {
  AuthOptions,
  Session,
  User as NextAuthUser,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { prisma } from "@/lib/prisma";
import { JWT } from "next-auth/jwt";

// Define the User type if needed
interface User extends NextAuthUser {
  id: string;
}

// Define the type for the session callback
interface SessionWithId extends Session {
  user: User;
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({
      session,
      token,
      user,
      newSession,
      trigger,
    }: {
      session: Session;
      token: JWT;
      user: User;
      newSession: any;
      trigger: "update";
    }): Promise<Session> {
      // Ensure session.user is defined and is of type User
      if (session.user) {
        (session.user as User).id = user.id;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
