import React from 'react'

export default function Infocontant() {
    const obj = [{
        quote:'"',
        para:"Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc",
        name:"Celia Almeda"
    },
{
    quote:'"',
        para:"Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc",
        name:"Frank Kenny"
}]
  return (
    <div>
{obj.map((item=>{ return(
             <div className='content'>
                <p className='qoute'>{item.quote}</p>
                <p className='info-para'>{item.para}</p>
                <p className='info-name'>{item.name}</p>
                </div>
      )  }))}
    </div>
  )
}
