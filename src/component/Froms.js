import React, { useState } from 'react'
import FromInput from './FromInput'
import Radio from './Radio'
import Check from './Check'
import Select1 from './Select1'
import InputBox from './InputBox'

export default function Froms() {
  
  const [name , setName]=useState("");
  const [email , setEmail]=useState("");
  const [age , setAge]=useState("");
  const [rselected , setRselected]=useState("")
  const [cselected , setCselected]=useState("")
  const handleSubmit =()=>{
    window.alert("Thank you" )
    setName("")
    setEmail("")
    setAge("")
    setRselected("")
    setCselected("")
  }
  
  return (
    <div className='home-main'>
        <div className='from-body'>
           
            <div className='from-container'>
                <from>
                <FromInput name={name} setName={setName} email={email} setEmail={setEmail} age={age} setAge={setAge}/>
                <Select1 cselected={cselected} setCselected={setCselected}/>
                <Radio  rselected={ rselected} setRselected={setRselected}/>
                <Check />
                
                <input type="submit" className="from-submit" value="submit"  onClick={handleSubmit}></input>
                </from>
            </div>
          
        </div>
    </div>
  )
}
