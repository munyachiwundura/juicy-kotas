import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    

    const request = JSON.parse(req.body)

  
   
    const cartItem = await prisma.cartProduct.delete({
      where: {
        id: request.id
      } 
    })

    console.log(cartItem)

    res.status(200).json({ cartItem })
  }