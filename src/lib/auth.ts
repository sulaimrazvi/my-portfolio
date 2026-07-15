import GitHubProvider from 'next-auth/providers/github'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if ((profile as any)?.login === 'sulaimrazvi') {
        return true
      } else {
        return false
      }
    },
  },
}