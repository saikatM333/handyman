import React from 'react'

export default function Card() {
 const  obj = [{
    icon:"fa-solid fa-screwdriver-wrench",
    title:"Carpentry",
    para:  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"

 },{
    icon:"fa-solid fa-house-chimney-crack",
    title:"Flooring",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"

 },{
    icon:"fa-solid fa-paint-roller",
    title:"Painting",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },{
    icon:"fa-solid fa-lightbulb",
    title:"Electrical Work",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },{
    icon:"fa-solid fa-house",
    title:"Remodeling",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },{
    icon:"fa-solid fa-faucet-drip",
    title:"Plumbing",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },{
    icon:"fa-solid fa-broom",
    title:"Cleaning",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },{
    icon:"fa-solid fa-hammer",
    title:"Assembly",
    para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"


 },]
    /*
    */ 
  return (
    <div>
        <div className='card-container'>
           { obj.map((item , i)=>{return(
            <div className="card" key={i}>
                <span className='circle'><i className={item.icon +" card-icon"} ></i></span>
               
                <p className='card-title'>{item.title}</p>
                <p className='card-para'>{item.para}</p>
            </div>
)})}
        </div>
    </div>
  )
}
