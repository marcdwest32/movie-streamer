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
        const { email, password } = credentials
        const username = email.split('@')[0]
        const user = { id: '1', name: username, email }
        return user
      },
    }),
  ],
}

module.exports = { authOptions }
