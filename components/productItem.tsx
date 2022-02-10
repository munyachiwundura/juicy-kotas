import { FunctionComponent, useContext, useEffect, useState } from "react";
import styles from '../styles/components/productItem.module.css';
import Image from "next/image";
import Button from './button';
import { useSession } from 'next-auth/react'
import { Product } from "@prisma/client";
import Cart from "../pages/cart";
import { AppContext } from "../context";


type Props = {
    title: string,
    image: string,
    price: number,
    intro: string,
    id: number,
    preview: boolean
}

const ProductItem: FunctionComponent<Props> = (props) => {
    const {state, dispatch } = useContext(AppContext)

    const pushP = () => {
        dispatch({
            type: "INCREASE"
        })
    }

    const addToCart = async () => {
        const request = await fetch('/api/cart/add', {
            method: 'POST',
            body: JSON.stringify({
                itemId: props.id,
                user: session?.user?.email
            })
        })
        if (!request.ok) {
            throw Error(request.statusText);
          }
          return await request.json()
    }
    
    

 const { data: session } = useSession()

    return (
        <div onClick={()=> pushP()} className={styles.container}>
            <Image height={100} width={100} src={props.image}/>
            <div className={styles.title_container}>
                <p>{props.title}</p>    
                <p className={styles.price}>R{props.price}</p>
            </div>
            <span>{props.intro}</span>
            {session && <Button onClick={() => addToCart()} title="Add to Cart"/>}
        </div>
    )
}

export default ProductItem