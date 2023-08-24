import React, { useState } from 'react'
import Contactlist from './Contactlist'
import Input from './Input'

export default function Contact() {
   const [name , setName] = useState("")
    const [email , setEmail]=useState("")
   
     return (
    <div className='home-main'>
        <div className='contact-container'>
            <div className='contact-details'>
           
                <p className='meet-us'>Meet us </p>
                <Contactlist/>

            </div>
            <div className='contact-pic'></div>
            <div className='get-in-touch'>
                <p className='contact-title'>
                    Get in Touch 
                </p>
                <Input  name={name}  setName={ setName} email={email} setEmail = {setEmail}/>
                 </div>
        </div>
    </div>
  )
}
