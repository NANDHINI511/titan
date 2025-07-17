// import React from 'react';
import React, { useState } from 'react'
import './Loginform.css';

const Loginform = () =>{  
  const[form,setForm]=useState({
        username:"",
        email:"",
        password:"",
    
      })

      const[error,setError]=useState({})


      const validation=()=>{
        const newError={}
        if(!form.username) newError.username="invalid username";

        if(!form.email) newError.email="invalid email";
        else
        if(!/\S+@\S+\.\S+/.test(form.email)) newError.email=" missing error";

         if(!form.password) newError.password="invalid password";
        else{
          if(form.password.length<6) newError.password="must in 6 character";
          if(!/[a-z]/.test(form.password)) newError.password="must one lowercase character";
          if(!/[A-Z]/.test(form.password)) newError.password="must one uppercase character";
          if(!/[!@#$%&*?]/.test(form.password)) newError.password="must one in special character";
    
        }
        return newError;
      }

       const handleChange=(e)=>{ 
        const{name,value}=e.target;
        setForm({
          ...form,
          [name]:value,
        })
       }

       const handleSumbit=(e)=>{
        e.preventDefault();
        
        const validationerror=validation();
        
        if(Object.keys(validationerror).length===0)
        {
          console.log("form valid",form)
          setForm({
            username:"",
            email:"",
            password:"",
          })
          setError({});
        }
          
          else{
            setError(validationerror)
          }
        
       }
  return (
  
    <div>
      <div class="container bv mb-3 ">
    <div class="left-panel">
      <img src="watch.jpg" alt="Titan Watch" />
    </div>
    <div class="right-panel">
      <h2><span class="highlight">Hurry Up</span></h2>
      <p class="subtitle">Sign Up Now for a chance to win a</p>
      <p class="main-title">Free Watch <span class="exclaim">!</span></p>

      <form onSubmit={handleSumbit}>
        <input type="text" name='username'  placeholder="Full Name*" required onChange={handleChange} value={form.username} />
         {error.username&&<p>{error.username}</p>}
        <input type="password" name='password' placeholder="Password*" required onChange={handleChange} value={form.password}/>
          {error.password&&<p>{error.password}</p>}
        <input type="email"  name='email' placeholder="Email Address*" required onChange={handleChange} value={form.email} />
         {error.email&&<p>{error.email}</p>}
         <button class="btn subbutton">SUBMIT</button>
        <p class="terms">
          By continuing, I agree with Titan’s <a href="#">Terms Of Use</a> and <a href="#">Privacy Policies</a>
        </p>
      </form>
    </div>
  </div>
    </div>
  );
};

export default Loginform;
