import { FunctionComponent, useState } from "react";
import styles from '../styles/components/quantitySelect.module.css'

type Props = {
    onChange: Function,
    value: number
}
const QuantitySelect: FunctionComponent<Props> = (props) => {

    const [quantity, setQuantity] = useState(props.value)

    return (
        <div className={styles.container}>
            <i onClick={() => {
            setQuantity(quantity > 1? quantity - 1 : quantity)
            props.onChange(quantity)
            }
            } className="bi bi-chevron-left"></i>
                <p>{quantity}</p>
            <i onClick={() => {
                setQuantity(quantity < 10? quantity + 1 : quantity)
                props.onChange(quantity)
            }} className="bi bi-chevron-right"></i>
        </div>
    )
}

export default QuantitySelect