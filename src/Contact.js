import React, { useState } from 'react';

const Contact=()=>{
  const[fdata, setfdata]=useState({
    fname:"",
    number:"",
    email:"",
    msg:""
  })
  const InputEvent=(event)=>{
    const {name, value}=event.target;
    setfdata((prevalue)=>{
      return{
        ...prevalue,
        [name]:value
      }

    });
  }
  const onsubmit=(event)=>{
    event.preventDefault();
    alert(`My name is ${fdata.fname} and my number is ${fdata.number} and my Mail id is ${fdata.email}`);
    
  }
  return(
    <>
      <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
     </div>
     <div className="container contact_div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
       <form onSubmit={onsubmit}>
  <div className="mb-3">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control"
     id="exampleFormControlInput1" placeholder="Enter Your Name"
       name="fname" value={fdata.fname} onChange={InputEvent}
     />
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1">Mobile Number</label>
    <input type="number" className="form-control"
     id="exampleFormControlInput1" placeholder="Enter your Number"
     name="number" value={fdata.number} onChange={InputEvent}
     />
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" 
    id="exampleFormControlInput1" placeholder="name@example.com"
    name="email" value={fdata.email} onChange={InputEvent}
    />
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" 
    id="exampleFormControlTextarea1" rows="3"
    name="msg" value={fdata.msg} onChange={InputEvent}></textarea>
  </div>
  <div className="col-12">
  <button className="btn btn-primary"
   type="submit">Submit</button>

  </div>
</form>
       </div>
     </div>

     </div>
    </>
  )
}
export default Contact;