import { NextPage } from "next"
import Button from "../components/button"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import OrderCard from "../components/orderCard"
import { signIn, useSession } from 'next-auth/react'

const reasons = [
    {
     title: 'Fast delivery',
     icon: 'bi bi-truck',
     body: 'Kana sango ndofura sora, medzi ndoturunura, gomo ndogoromora, kuti uzive ndiwee dhali wangu'
    },
    {
     title: 'Fast delivery',
     icon: 'bi bi-truck',
     body: 'Kana sango ndofura sora, medzi ndoturunura, gomo ndogoromora, kuti uzive ndiwee dhali wangu'
    },
    {
     title: 'Fast delivery',
     icon: 'bi bi-truck',
     body: 'Kana sango ndofura sora, medzi ndoturunura, gomo ndogoromora, kuti uzive ndiwee dhali wangu'
    },
]

const Order: NextPage = () => {
  const {data: session} = useSession()
  return (
    <main>
<header className={styles.header}>
          <div className={styles.header_text}>
            <h1>Make your Order</h1>
            <h2>Choose how you would want to order</h2>
            <div className={styles.call_to_action}>
              {session?
              <Link href={'/menu'}>
              <Button title='Go to Menu'/>
              </Link>:
                <Button onClick={() => signIn()} title='Order Online'/>
                }
              <Link href={'/contact'}>
                <p>Call us</p>
              </Link>
            </div>
          </div>
          <Image src={'/img/products/burger.png'} width={500} height={500}/>
        </header>
        <section>
            <h1>Why Choose Us</h1>
            <div className={styles.products}>
              {reasons.map((x, y) => <OrderCard key={y} body={x.body} icon={x.icon} title={x.title}/>)}  
            </div>
        </section>
    </main>
  )
}

export default Order