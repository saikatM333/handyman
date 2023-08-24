import React from 'react'

export default function Check() {
    const obj = [{
        title:"Front-end Projects"
    },
    {
        title:" Back-end Projects"
    },
    {
        title:" Data Visualization"
    },
    {
        title:"Challenges"
    },
    {
        title:"Open Source Community"
    },
    {
        title:"Gitter help rooms"
    },{
        title:" Videos"
    },{
        title:" City Meetups"
    },{
        title:" Wiki"
    },
    {
        title:" Forum"
    },{
        title:"Additional Courses"
    }]

  return (
    <div>
         <p className='check-title'>What would you like to see improved? (Check all that apply)</p>

      {  obj.map((item)=>{return(
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label" for="defaultCheck1">
    {item.title}
  </label>
  </div>
  )})}
    </div>
  )
}
