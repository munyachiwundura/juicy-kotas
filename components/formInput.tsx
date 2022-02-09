import styles from '../styles/components/formInput.module.css'
import { FunctionComponent } from 'react'

type Props = {
    title: string,
    onChange: Function
}

const FormInput: FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.container}>
            <span>{props.title}</span>
            <input name={props.title} placeholder={props.title} onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default FormInput