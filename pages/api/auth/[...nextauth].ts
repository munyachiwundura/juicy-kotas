import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // })
  ],
  adapter: PrismaAdapter( prisma ),
  secret: process.env.SECRET,
};