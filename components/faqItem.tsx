import styles from '../styles/components/faqItem.module.css'
import { FunctionComponent, useState } from 'react'

type Props = {
    question: string,
    answer: string
}

const FaqItem: FunctionComponent<Props> = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div onClick={() => setOpen(!open)} className={styles.question}>
                <p>{props.question}</p>
                <i className={!open? 'bi bi-plus' : 'bi bi-dash'}></i>
            </div>
            {open && <div className={styles.answer}>
                <p>{props.answer}</p>
            </div>}
        </div>
    )
}

export default FaqItem