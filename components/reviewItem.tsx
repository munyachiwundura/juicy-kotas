import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../styles/components/reviewItem.module.css'

type Props = {
    reviewer: string;
    image: string;
    rating: number;
    review: string
}

const ReviewItem: FunctionComponent<Props> = (props) => {

    let stars = []

    for (let i = 0; i < 5; i++) {
        stars.push(<i key={i} className='bi bi-star'></i>)
    }

    for (let i = 0; i < props.rating; i++) {
        stars.pop()
        stars.unshift(<i key={i + 5} className='bi bi-star-fill'></i>)
    }

    return (
        <div className={styles.container}>
            <div className={styles.reviewer}>
                <Image width={200} height={200} src={props.image}/>
                <p>{props.reviewer}</p>
            </div>
            <div className={styles.review}>
                <p>{props.review}</p>
                {stars}
            </div>
        </div>
    )
}

export default ReviewItem
