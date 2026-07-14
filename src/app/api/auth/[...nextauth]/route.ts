import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
        if ((profile as any).login === 'sulaimrazvi'){
            return true;
        }
        else{
            return false;
        }
      
    },
  },
})

export { handler as GET, handler as POST }