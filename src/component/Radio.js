import React from 'react'

export default function Radio(props) {
  const handleChange = (e)=>{
    props.setRselected(e.target.value);
  }
  return (

    <div>
    <p className='radio-title'>Would you recommend freeCodeCamp to a friend?</p>

        <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={handleChange} checked />
  <label class="form-check-label" for="exampleRadios1">
  Definitely

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onChange={handleChange}/>
  <label class="form-check-label" for="exampleRadios2" onChange={handleChange}>
  Maybe

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label class="form-check-label" for="exampleRadios3">
  Not sure
  </label>
</div>
    </div>
  )
}
