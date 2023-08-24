import React from 'react'

function FromInput(props) {
    const obj = [{
        title:"Name",
        placeholder:"enter valid name",
        value:props.name,
        changeHandle:(e)=>{
            props.setName(e.target.value)
        }
    },
    {
        title:"Email",
        placeholder:" enter valid email",
        value:props.email,
        changeHandle:(e)=>{
            props.setEmail(e.target.value)
        }
        
    },{
        title:"Age(Optinal)",
        placeholder:"enter age",
        value:props.age,
        changeHandle:(e)=>{
            props.setAge(e.target.value)
        }
    }]
    

  return (
   <div>
    {obj.map((item)=>{return(<div className='input-container'>
    <p className='input-label'>{item.title}</p>
    <input type='text'  value={item.value} className='input-text' placeholder={item.placeholder} onChange={item.changeHandle}/>
</div>
) })}
  </div>
    
  )
}

export default FromInput