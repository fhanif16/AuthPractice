import { useState } from 'react'
import './App.css'
import app from './Firebase/firebase.config';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

function App() {
  //const [count, setCount] = useState(0)
  const [user , setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  
const googleSignInHandeler =() => {
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const loggedUser = result.user;
   //console.log(loggedUser)
   setUser(loggedUser);
    
  }).catch((error) => {
    console.log(error)
    
  });
}

  return (
    <>
      <div className='App'>
      <h1>Firebase + React</h1>
      <button onClick={googleSignInHandeler}>GoogleSignIn</button>
        
      </div>
      
      
    </>
  )
}

export default App
