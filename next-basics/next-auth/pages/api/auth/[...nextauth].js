import NextAuth from "next-auth";
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        })
    ]
})