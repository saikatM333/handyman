import React from 'react'

export default function Nav(props) {
    const handleHam = ()=>{
      if (props.menu=="hidden"){
      props.setMenu("visible");
      console.log(props.menu)
      }
     else if (props.menu=="visible"){
        props.setMenu("hidden");
        console.log(props.menu)
        }}
  return (
    <div>
       
        <div className='hambergur'>
            <i class="fa-solid fa-bars  nav-icon" onClick={handleHam}></i>
       </div>
       
       
    </div>
  )
}
