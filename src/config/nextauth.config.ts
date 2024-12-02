import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { cookies } from 'next/headers'

import axiosInstance from '../lib/AxiosInstance'

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ profile, account }: any) {
      try {
        console.log({ profile, account })

        if (!profile || !account) {
          return false
        }

        if (account?.provider === 'google') {
          const response: any = await axiosInstance.post('auth/social-login', {
            name: profile.name,
            email: profile.email,
            profilePhoto: profile.picture,
          })

          if (
            response.data.data.accessToken ||
            response.data.data.refreshToken
          ) {
            cookies().set('accessToken', response.data.data.accessToken)
            cookies().set('refreshToken', response.data.data.refreshToken)

            return true
          } else {
            return false
          }
        } else if (account?.provider === 'github') {
          const response: any = await axiosInstance.post('auth/social-login', {
            name: profile.name,
            email: profile.email,
            profilePhoto: profile.avatar_url,
          })

          if (
            response.data.data.accessToken ||
            response.data.data.refreshToken
          ) {
            cookies().set('accessToken', response.data.data.accessToken)
            cookies().set('refreshToken', response.data.data.refreshToken)

            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } catch (error) {
        console.log(error)

        return false
      }
    },
  },

  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXT_AUTH_SECRET as string,
}
