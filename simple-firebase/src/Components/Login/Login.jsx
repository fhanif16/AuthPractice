import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [user , setUser] = useState(null);

    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser)
        })
        .catch( error => {
            console.log('error' , error.message)
        })



    }

    const handleSignOut = () => {
       signOut(auth).then((result) => {
        console.log(result)
        setUser(null);
            // Sign-out successful.
          }).catch((error) => {
            console.log(error)
            // An error happened.
          });

    }

    const handleGithubLogin =() => {
        signInWithPopup(auth, githubProvider)
  .then((result) => {
    const loggedInUser  = result.user;
    console.log(loggedInUser);
       setUser(loggedInUser);
    
  }).catch((error) => {
    console.log(error);
 
    
  });

    }

    return (
        <div>
            <h1>Hello login</h1>
          {
            user ?   
            <button onClick={handleSignOut}>SignOut</button> :
            <div>
                 <button onClick={ handleGoogleSignIn}>Google Login</button>
                 <button onClick={handleGithubLogin}>Github Login</button>
                 </div>
          }
            {
                user && <div><h3>User: {user.displayName}</h3>
                <p>user email {user.email}</p>
                <img src={user.photoURL} alt="" srcset="" />
                </div>
            }
           
        </div>
    );
};

export default Login;
