import React, { useContext } from 'react';

import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)


    return (
        <Container className='mt-4'>
           <div className='text-center'>
           <img src={logo} alt="" srcset="" />
            <p className='text-secondary'><small>Journalism without Fear or favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>

           <div className='d-flex'>
           <Button variant="danger">Latest</Button>
           <Marquee className="text-danger" speed={100} pauseOnHover={true}>
  I can be a React component, multiple React components, or just some text......................
</Marquee>
           
           </div>
          
        </Container>
    );
};

export default Header;

