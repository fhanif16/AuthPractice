import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    const {user , logOut} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => {
        console.log(error)
      })


    }
  
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav>
              <Link to='/'>Home</Link>
            </Nav>
            <Nav href="#pricing">About</Nav>
            <Nav href="#pricing">Career</Nav>
           

          </Nav>
          <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }} />}
                            {console.log('user in NavigationBar:', user)}
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button  variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </Container>
    );
};

export default NavigationBar;