import React, { useState } from 'react';

const RegisterBs = () => {
  

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
console.log(email, password)

    }
    return (
        <form onSubmit={handleRegisterSubmit}className='mx-auto w-50'>
  <div class="mb-3 mt-4">
    
    <input className ="w-50 mb-4" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder='email'/>
    
  </div>
  <div class="mb-3">
  
    <input className ="w-50 mb-4 rounded" type="password" class="form-control" id="exampleInputPassword1"  name="password" placeholder='password'/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
       
    );
};

export default RegisterBs;