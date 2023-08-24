import React from 'react'

export default function Contactlist() {
    const obj=[{
        icon:"fa-solid fa-phone",
        title:"Phone",
        content:"+123567890"
    },{
        icon:"fa-solid fa-location-dot",
        title:"Our Office",
        content:"121 Rock Sreet, 21 Avenue,New York, NY 92103-9000"
    },{
        icon:"fa-solid fa-envelope",
        title:"Chart to us",
        content:"hi@ourcompany.com"
    }]
    const style ={
        color:"orangered",
        position:"unset",
        top:"none",
        left:"none",
        fontSize:"2.5vw"
        
    }
  return (
    <div>
       { obj.map((item)=>{return(
        <div className='contact-list'>
            <div className='icon-title'>
                    <i className={item.icon} style={style}></i>
                    <p className='contact-tile'>{item.title}</p>
                    </div>
                    <p className='contact-list-contant'>{item.content}</p>
        </div>
        )})}
        
    </div>
  )
}
