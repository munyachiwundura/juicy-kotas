import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    

    const request = JSON.parse(req.body)

    const product = await prisma.product.findUnique({
        where: {
          id: request.itemId
        }
      })
let cart 

    cart = await prisma.cart.findFirst({
      where: {
        user: {
          email: request.user
        }
      },
      include: {
        product: true
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

    let cartItem
    
    cartItem = await prisma.cartProduct.findFirst({
      where: {
        Cart: {
         id: cart.id
        },
        product: {
          id: request.itemId
        }
      } 
    })

    if (!cartItem) {
      cartItem = await prisma.cartProduct.create({
        data: {
          product: {
            connect: {
              id: request.itemId
            }
          },
          price: 0,
          quantity: 1,
          Cart: {
            connect: {
              id: cart.id
            } 
          } 
        }
      })

    } else if(cartItem) {
      const cartItemUpdate = await prisma.cartProduct.update({
      where: {
        id: cartItem.id
      },
      data: {
        quantity: cartItem.quantity + 1
      }
      })
    }

    res.status(200).json({ product })
  }