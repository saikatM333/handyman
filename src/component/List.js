import React from 'react'
import Listitm from './Listitm'

export default function List() {
  return (
    <div>
        <div className='heading-container'>
            <p className='heading'>Get a Free Estimate!<br/>Ready to Start that Project?</p>
            <p className='list-content'>Do your home and yourself a favor—update that interior, take care of needed repairs,
             or complete a makeover with help from the home service professionals at your local
             Mr. Handyman. We can help you with things like:</p>

             <div className="list-items">
                <Listitm/>
             </div>
        </div>
    </div>
  )
}
