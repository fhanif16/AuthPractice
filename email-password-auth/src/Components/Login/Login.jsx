import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const [success , setSuccess] = useState('');
  const emailRef = useRef();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    //const username = e.target.username.value;
   // const password = e.target.password.value;
   const form = e.target;
   const username = form.username.value;
   const password = form.password.value;
   setError('');
   setSuccess('');
   if(!/(?=.*[A-Z])/.test(password)){
    setError('Please add at least one uppercase')
    return;
}
else {
    setSuccess('Login successful');
}

    console.log('Username:', username);
    console.log('Password:', password);
    setUsername(username);
    setPassword(password);
   
  };

  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUsername(user);
   setSuccess('user login succesful');
    // ...
  })
  .catch((error) => {
    console.error(error);
  });
const   handleResetPassword = (event) => {
 const email = emailRef.current.value;
 if(!email){
  alert("please provide ur email address")
  return;

 }
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("please check ur email")
    // ..
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    setError(errorMessage);
    // ..
  });

}
    return (
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    name="username"
                    ref={emailRef}
                   
                  
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                   
                  
                    required
                  />
                </div>
                <p>{error}</p>
                <p>{success}</p>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <p>forget password <button onClick={handleResetPassword} className='btn btn-link'>Reset</button></p>
                
              </form>
              <p>New to page. <Link to="/register">Register</Link></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;