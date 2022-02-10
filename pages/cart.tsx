import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import CartItem from '../components/cartItem'

const Cart = () => {

  const [products, setProducts] = useState([])
  const {data: session } = useSession()

  const getCart = async () => {
    const request = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({
            user: session?.user?.email
        })
    })
    if (!request.ok) {
        throw Error(request.statusText);
      }
      const data = await request.json()
      setProducts(data.cart.product)
      return data
}

  useEffect(() => {
    getCart()
  },[])

  return (
    <main>
        <section>
            <h1>Cart</h1>
            <div>
              {
               products.map((x: any, y)=>              
                 <CartItem key={y} productId={x.id} image={'/img/products/' + x.product.image} onDelete={() => getCart()} price={x.product.price} quantity={x.quantity} title={x.product.title}/>
               )
              }
            </div>
        </section>
    </main>
  )
}

export default Cart