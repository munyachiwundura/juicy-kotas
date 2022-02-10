import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    

    const request = JSON.parse(req.body)

 
let cart 

    cart = await prisma.cart.findFirst({
      where: {
        user: {
          email: request.user
        }
      },
      include: {
          product: {
            include: {
              product: true
            }
          }
      }
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data : {
          user: {
            connect: {
              email: request.user }
            },
          price: 0,    
        }
      })
    }

    console.log(cart)
    res.status(200).json({ cart })
  }