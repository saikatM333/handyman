import React from 'react'

export default function Select1(props) {
  const handleChange=(e)=>{
    props.setCselected(e.target.value)
  }
  return (
    <div>
        <p className='select1'>Which option best describes your current role?</p>

        <select className="form-select"  onChange={handleChange} >
  <option  >Open this select menu</option>
  <option value="1" >select current role </option>
  <option value="2">student</option>
  <option value="3" >full time job </option>
  <option value="3">full time learner </option>

  <option value="5">prefer not to tell  </option>
  <option value="6">other </option>


</select>
    </div>
  )
}
