import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import App from '../../App';
import app from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {

    const auth = getAuth(app);
    const [email , setEmail] = useState('');
    const [success , setSuccess] = useState('');
    const [registerError , setRegisterError] = useState('');
    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value);

    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setRegisterError('');
        console.log(event.target);
        const email =(event.target.email.value);
        const password = (event.target.password.value);
        console.log(email , password)
        if(!/(?=.*[A-Z])/.test(password)){
            setRegisterError('Please add at least one uppercase')
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setRegisterError("please add atleast 2 digit");
            return;
            
        }

        else if(password.length < 6){
            setRegisterError("atleast 6 characters long");
            return;
        }

        
    
       createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setRegisterError ('');
    event.target.reset();
    setSuccess('Registration successful');
   sendEmailVerification(user);

  
    // ...
  })
  .catch((error) => {
    console.error (error.message)
    setRegisterError(error.message)
    setSuccess('');
    // ..
  });
  const sendEmailVerification = (user) => {
    sendEmailVerification(user)
.then((result) => {
// Email verification sent!
console.log(result)
alert("please varify your email");
// ...
});
}


    }
   

    return (
        <div>
            <h1>This is register page </h1>
            <form onSubmit={handleSubmit} className='mx-auto w-50 '>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='email' required />
                <br/>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="password" required/>
                <br/>
                <p className='text-danger'>{registerError}</p>
              <input type="submit" value="Register" />
              <p className='text-success'>{success}</p>


            </form>
            <p>Already have an account! <Link to="/login">Login</Link></p>
            
        </div>
    );
};

export default Register;