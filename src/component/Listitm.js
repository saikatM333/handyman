import React from 'react'

export default function Listitm() {
    const obj=[{
        heading:"Kitchen Repair",
        para:"Dont live with an outdated or broken down kitchen. Our fast, effective kitchen repair services can help you create a kitchen you love to spend time in."
    },{
        heading:"Toilet Repair",
        para:"A toilet that constantly runs is annoying, and it wastes water. Does your tub and sink gurgle whenever you flush the toilet? There is an easy fix, contact us today and let us diagnose and repair your toilet problems today."
    },{
        heading:"Countertop Repair",
        para:"If your home’s countertops are starting to show their age—dated, dingy, chipped, or otherwise broken—you can count on us to give them the makeover they need."
    },{
        heading:"Shower Head Repair",
        para:"If your showerhead is leaking, has low pressure or is just broken, give us a call. We'll get your shower working like new with repair or replacement."
    },{
        heading:"Bathroom Repair",
        para:"Cracked tile? Drywall holes? Need a new vanity? We can help keep all the frequently used rooms in your home looking and working their best."
    },{
        heading:"Faucet Repair",
        para:"Did you know that a dripping faucet could waste up to 200 gallons of water per month? If you have a faucet that’s leaking, don’t wait, give us a call."
    }]
  return (
    <div>
        <div className='list-item-container'>
           
               { obj.map((item)=>{return(
                     <div className='item'>
                    <p className='item-heading'>
                            {item.heading}
                    </p>
                    <p className='item-para'>{item.para}</p>
                    </div>
               ) })}

        </div>
    </div>
  )
}
