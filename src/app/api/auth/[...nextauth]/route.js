import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions = {
//   // Configure one or more authentication providers
//  pages: {
//     signIn: '/login',
//     signOut: '/auth/signout',
//     // error: '/auth/error', // Error code passed in query string as ?error=
//     // verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: '/register' // New users will be directed here on first sign in (leave the property out if not of interest)
//   },
// providers: [
//   CredentialsProvider({
//     // The name to display on the sign in form (e.g. 'Sign in with...')
//     name: 'Credentials',
//     // The credentials is used to generate a suitable form on the sign in page.
//     // You can specify whatever fields you are expecting to be submitted.
//     // e.g. domain, username, password, 2FA token, etc.
//     // You can pass any HTML attribute to the <input> tag through the object.
//     credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials, req) {
//       // You need to provide your own logic here that takes the credentials
//       // submitted and returns either a object representing a user or value
//       // that is false/null if the credentials are invalid.
//       // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//       // You can also use the `req` object to obtain additional parameters
//       // (i.e., the request IP address)
//       const res = await fetch("https://ecombackend.softprodigyphp.in/users/login", {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//         headers: { "Content-Type": "application/json" }
//       })
//       const user = await res.json()

//       // If no error and we have user data, return it
//       if (res.ok && user) {
//         return user
//       }
//       // Return null if user data could not be retrieved
//       return null
//     }
//   })
// ]

// }

// export default NextAuth(authOptions)