import { FunctionComponent } from 'react'
import styles from '../styles/components/orderCard.module.css'

type Props = {
    icon: string,
    title: string,
    body: string
}
const OrderCard: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.icon_container}>
        <i className={props.icon}></i>
        </div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default OrderCard