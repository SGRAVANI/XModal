import React, { useState } from 'react'
import  "./style.css"
export default function XModal() {
 let [inp,setInp]=useState({username:"",phone:"",email:"",dob:""})
  let [f,setF]=useState(false)
  function handleModal(e)
  {
   if(e.target.id=="modal")
   {
    setF(false)
   }
  }
function handleSubmit(e)
{
  e.preventDefault()
  if(!inp.email.includes('@',0))
  {
    alert("Invalid email. Please check your email address.")
    return;
  }
  if(inp.phone.length!==10)
  {
    alert("Invalid phone number. Please enter a 10-digit phone number.")
    return
  }
  let selectedDate=inp.dob;
  let selectedUTC=new Date(selectedDate).setUTCHours(0,0,0,0)
  let curDateUTC=new Date().setUTCHours(0,0,0,0)
  //console.log(curDate)
  //console.log(selectedUTC)
  
  if(selectedUTC>curDateUTC)
  {
    alert("Invalid date of birth. Date of birth can not be in the future.")
    return;
  }
  console.log("submitted")
    setF(false)
}
 function handleForm()
 {
  setF(true)
  console.log("clicked")
 }
  function handleChange(e)
{
  setInp((prev)=>{
    return {...prev,[e.target.name]:e.target.value}
  })
}
 return (
    
<div className="container">
<h1>User Details Modal</h1>
<button className='btn' onClick={handleForm}>Open Form</button>
{f&&<div className="modal" onClick={handleModal} id="modal">
<form className='modal-content' onSubmit={handleSubmit}>
 <h1>Form Details</h1>

   <label htmlFor='username'>Username:</label>
 <input type='text' name="username" onChange={handleChange} id="username" required value={inp.username}/>
 <label htmlFor='email'>Email Address:</label>
 <input type='email' name="email" onChange={handleChange} id="email" required value={inp.email}/>
 <label htmlFor='phone'>Phone Number:</label>
 <input type='number' name="phone" onChange={handleChange} id="phone" required val={inp.phone}/>
 <label htmlFor='dob'>Date of Birth:</label>
 <input type='date' name="dob" onChange={handleChange} id="dob" required val={inp.dob}/>
 <button type='submit' className='btn submit-button'>Submit</button>
 </form>

</div>
}
</div>
  )
}
