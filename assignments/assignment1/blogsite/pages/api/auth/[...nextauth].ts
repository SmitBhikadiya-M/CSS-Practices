import NextAuth from 'next-auth/next'
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'

export const authOption = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                Username: { label: 'Username', type: 'text', placeholder: 'enter your username' },
                Password: { label: 'Password', type: 'password', placeholder: 'enter your password' }
            },
            async authorize(cred, req) {

                let res = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: cred?.Username,
                        password: cred?.Password,
                        // expiresInMins: 60, // optional
                    })
                })

                const user = await res.json();

                if (user.message == 'Invalid credentials')
                    return null

                return user;
            }
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID || '',
        //     clientSecret: process.env.GITHUB_SECRET || '',
        // }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }: any) {

            if (user?.id) {
                token.id = user.id
            }
            if (user?.username) {
                token.username = user.username;
            }
            return token
        },
        async session({ session, token }: any) {
            session.user.id = token.id;
            session.user.name = token.username;
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }
}

export default NextAuth(authOption)