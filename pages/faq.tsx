import { NextPage } from 'next'
import {FunctionComponent} from 'react'
import FaqItem from '../components/faqItem'


const faq = [
    {
        question: 'Ragga msambo winky D',
        answer: 'Well this one is called the ragga song Coz we are from the ragga year Every yea JusaaaBatachi chipatani icho Inzwa chiGaffer chauya nechimbo Dhanzi rese rakungoti ndipo hanzi ndipo ndipo ndipo Manje ndine zvimwe four Zvinotangisa disco Inzwa chaunga chadaira Handichaye missed call'
    },
    {
        question: 'Ragga msambo winky D',
        answer: 'Well this one is called the ragga song Coz we are from the ragga year Every yea JusaaaBatachi chipatani icho Inzwa chiGaffer chauya nechimbo Dhanzi rese rakungoti ndipo hanzi ndipo ndipo ndipo Manje ndine zvimwe four Zvinotangisa disco Inzwa chaunga chadaira Handichaye missed call'
    },
    {
        question: 'Ragga msambo winky D',
        answer: 'Well this one is called the ragga song Coz we are from the ragga year Every yea JusaaaBatachi chipatani icho Inzwa chiGaffer chauya nechimbo Dhanzi rese rakungoti ndipo hanzi ndipo ndipo ndipo Manje ndine zvimwe four Zvinotangisa disco Inzwa chaunga chadaira Handichaye missed call'
    },
    {
        question: 'Ragga msambo winky D',
        answer: 'Well this one is called the ragga song Coz we are from the ragga year Every yea JusaaaBatachi chipatani icho Inzwa chiGaffer chauya nechimbo Dhanzi rese rakungoti ndipo hanzi ndipo ndipo ndipo Manje ndine zvimwe four Zvinotangisa disco Inzwa chaunga chadaira Handichaye missed call'
    },
]

const Faq: NextPage = () => {
  return (
    <main>
        <section>
            <h1>Frequently Asked Questions</h1>
            {faq.map((x, y) => <FaqItem key={y} question={x.question} answer={x.answer} />)}
        </section>
    </main>   
  )
}

export default Faq