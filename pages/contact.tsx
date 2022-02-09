import { NextPage } from "next"
import Button from "../components/button"
import FormInput from "../components/formInput"

const Contact: NextPage = () => {
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
    }
  return (
   <main>
       <section >
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
       <FormInput title="Name" onChange={(x: any)=> console.log(x)}/>
       <FormInput title="Email" onChange={(x: any)=> console.log(x)}/>
       <FormInput title="Subject" onChange={(x: any)=> console.log(x)}/>
       <FormInput title="Message" onChange={(x: any)=> console.log(x)}/>
       <br/>
       <Button title="Send"/>
        </form>
       </section>
   </main>
  )
}

export default Contact