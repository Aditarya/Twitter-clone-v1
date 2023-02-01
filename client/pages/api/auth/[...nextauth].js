import NextAuth from "next-auth"
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions = {
    //export default nextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)


