import withAuth from 'next-auth/middleware'
import { getToken } from "next-auth/jwt"

export default withAuth(
  async (req) => {},
  {
    callbacks: {
      authorized: async ({req}) => {
        let token = await getToken({
          req,
          secret: process.env.NEXTAUTH_SECRET,
          raw: true
        })

        return !!token
      },
    },
  }
)

export const config = { matcher: ['/posts/create'] }