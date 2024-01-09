import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../Providers/AuthProvider';


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted , setAccepted] = useState(false)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form. email. value;
    const password = form.password.value;
    console.log(name,photo, email, password);

    createUser(email, password)
    .then (result => {
      const createdUser = result.user;
      console.log(createdUser)
    })

    .catch(error => {
      console.log(error)
    })
  }

  const handleAccepted =(event) => {
   setAccepted(event.target.checked)

  }
    return (
        <div>
            <Container className=' w-25 mx-auto'>
        <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="Text" name="name" placeholder="Enter your name" required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter your Password"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter your email address" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Enter yourPassword"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        onClick={handleAccepted}
        name="accept"
         label={<>Accept <Link to="/terms">Terms And Conditions</Link> </>} />
      </Form.Group>
     

      <Button variant="primary" type="submit" disabled={!accepted}>  
        Register
      </Button>
      <br/>
      <Form.Text classNane="text-secondary">
      Already have an Account?
      <Link to ="/login">Login</Link>
      </Form.Text>
      <br/>

      <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text > 
     
    </Form>

      </Container>
        </div>
    );
};

export default Register;
