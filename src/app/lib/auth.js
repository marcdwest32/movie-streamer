const { NextAuthOptions } = require('next-auth')
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        console.log(credentials)
        const { email, password } = credentials
        const username = email.split('@')[0]
        const user = { id: '1', name: username, email }
        return user
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      }
    },
    jwt: ({ token, user, account }) => {
      console.log('JWT Callback', { token, user, account })
      if (user) {
        const u = user
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
}

module.exports = { authOptions }
