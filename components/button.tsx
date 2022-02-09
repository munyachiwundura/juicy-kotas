import { FunctionComponent } from "react";
import styles from '../styles/components/button.module.css'

type Props = {
    title: string,
    onClick?: () => void
}

const Button: FunctionComponent<Props> = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>{props.title}</button>
    )
}

export default Button