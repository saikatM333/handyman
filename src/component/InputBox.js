import React from 'react'

export default function InputBox(props) {
    const changeHandle = (e)=>{
        props.setData(e.target.value)
    }
  return (
    <div>
       <input type='text' value={props.data} className='from-input-text' placeholder="enter your name " onChange={changeHandle}/>
     
    </div>
  )
}
