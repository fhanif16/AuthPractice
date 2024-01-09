import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../FireBase/Firebase.config';

const Register = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
    
  const handleRegister = (event) => {
    event.preventDefault();
    const email = (event.target.email.value);
    const password = (event.target.password.value);
    console.log(email, password);
    setEmail(email)
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
setEmail(user)
// ...
})
.catch((error) => {
console.error(error)
// ..
});


}
  return (
        <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">

<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
<form onSubmit={handleRegister}className="space-y-6" action="#" method="POST">
<div>
    <label name="text" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
    <div className="mt-2">
      <input id="user" name="user" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>
  <div>
    <label name="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    <div className="mt-2">
      <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>


   
  <div className="flex items-center justify-between">
          <label name="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
   
  </div>
  <div className="flex items-center justify-between">
          <label name="confirm" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
         
        </div>
        <div className="mt-2">
          <input id="confirm" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
   
  </div>
  <div className="flex items-center justify-between">
  <label name="check">Show Password</label>
  <input
                    id="check"
                    type="checkbox"
                    value=" "
                    
                />
  </div>

  <div>
    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
  </div>
</form>

<p className="mt-10 text-center text-sm text-gray-500">
  Already a member?
  <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
    <Link to="/register">LogIn</Link>
  </a>
</p>
</div>
</div>
    </div>
    );
};

export default Register;