import React from 'react'

export default function Input(props) {
   
    const obj=[{
        title:"Name",
        input:"enter valid name",
        value:props.name,
        handlechange:(e)=>{
            props.setName(e.target.value)
        }
    },
    {
        title:"Email",
        input:"enter valid email address",
        value:props.email,
        handlechange:(e)=>{
            props.setEmail(e.target.value)
    }
    }]

    const handleClick = ()=>{
        window.alert("thank you")
        props.setName("")
        props.setEmail("")
    }
   
  return (<div>
   {obj.map((item)=>{return(<div className='input-container'>
        <p className='input-label'>{item.title}</p>
        <input type='text' value={item.value}  className='input-text' placeholder={item.input} onChange={item.handlechange}/>
    </div>
   ) })}
   <button className="submit-button"value="submit" onClick={handleClick}>submit</button>
           
   </div>
  )
}
