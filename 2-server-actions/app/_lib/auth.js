import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingUser = await getUser(user.email);
        if (!existingUser) {
          await createUser({ email: user.email, name: user.name });
        }
        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session }) {
      // Get user ID and store in session for all the CRUD operations later
      const user = await getUser(session.user.email);
      session.user.userId = user.id;
      return session; // important
    },
  },
  pages: {
    signIn: "/login",
  },
});
