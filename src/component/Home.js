import React from 'react'
import Card from './Card'
import Extrainfo from './Extrainfo'
import List from './List'
import Footer from './Footer'

export default function Home() {
   


  return (
    <div className='home-main'>

        <div className='section1'>
         <div className="display">
            <p className='title'>
                Handyman services 
            </p>

            <p className="sample-text">
            Sample text. Click to select the Text Element. We can do any type of work.
             Find what you are looking!
            </p>

            <p className='seprete'>image from wiki</p>
            <p class="contact-button">
                Contact Us 
            </p>

</div>
<div className='display-back'>

</div>
        </div>

        <div   className='section2'>
         <div classsName = "appoinment">
          <p className="install-title">Install and repair services </p>
          <p className='service-text'>Our local experts in your neighborhood can be there as soon as same-day. 
          Duis aute irure dolor in reprehenderit</p>
          <p className="apointment-button">BOOK AN APPOINTMENT </p>
         </div>
        </div>

        <div className='section3'>
          <Card/>
          <Extrainfo/>
          <List/>
        </div>
        <div className='section4'>
        
        <Footer/>
        </div>

    </div>
  )
}
