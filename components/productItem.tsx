import { FunctionComponent } from "react";
import styles from '../styles/components/productItem.module.css';
import Image from "next/image";
import Button from './button';
import { useSession } from 'next-auth/react'


type Props = {
    title: string,
    image: string,
    price: number,
    intro: string,
    preview: boolean
}
const ProductItem: FunctionComponent<Props> = (props) => {
 const { data: session } = useSession()
    return (
        <div className={styles.container}>
            <Image height={100} width={100} src={props.image}/>
            <div className={styles.title_container}>
                <p>{props.title}</p>    
                <p className={styles.price}>R{props.price}</p>
            </div>
            <span>{props.intro}</span>
            {session && <Button title="Add to Cart"/>}
        </div>
    )
}

export default ProductItem