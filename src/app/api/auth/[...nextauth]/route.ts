import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_OAUTH_ID || '',
      clientSecret: process.env.GITHUB_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn() {
      return true
    },
    async session({ session }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
