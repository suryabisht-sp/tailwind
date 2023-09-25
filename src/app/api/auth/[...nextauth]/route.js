import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'
import { useCallback } from "react";


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


const authOptions = async () => {
  providers: [
    GitHubProvider({
      profile(GithubProfile) {
        //console.log(profile)
        return {
          ...GithubProfile,
          role: GithubProfile.role ?? "user",
          id: GithubProfile.id.toString(),
          image: GithubProfile.avatar_url,
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password"
        }
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data 
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  
  callback={
    jwt({ token, user }) {
        if (user) token.role = user.role;
        return token;
    },
    async session({ session, token }) {
        if (session?.user) session.user.role = token.role;
        return session;
    }
}

}

