import Image from "next/image";
import { FunctionComponent } from "react";
import QuantitySelect from "./quantitySelect";
import styles from '../styles/components/cartItem.module.css'


type Props = {
    title: string,
    image: string,
    price: number,
    quantity: number,
    onDelete: Function,
    onChange?: Function
}

const CartItem: FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_and_title_container}>
                <Image src={props.image} width={100} height={100}/>
                <p>{props.title}</p>
            </div>
            {props.onChange? <QuantitySelect onChange={(x: any) => props.onChange && props.onChange(x)} value={props.quantity}/> : <p>{props.quantity}</p>}
            <p>R{props.price}</p>
            <i onClick={() => props.onDelete()} className="bi bi-trash"></i>
        </div>
    )
}

export default CartItem