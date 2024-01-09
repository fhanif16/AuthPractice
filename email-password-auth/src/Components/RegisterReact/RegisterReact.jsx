import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


const RegisterReact = () => {
  const auth = getAuth(app);


    const handleRegister = (event) => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
   console.error(error)
    // ..
  });


    }
    return (
        <Form onSubmit={handleRegister} className='mx-auto w-50' > 
        <h4 className='text-primary'>Please register </h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name ="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default RegisterReact;