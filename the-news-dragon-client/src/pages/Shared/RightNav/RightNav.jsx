
import React from 'react';
import './RightNav.css'
import Button from 'react-bootstrap/Button';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter,FaInstagram  } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../QZone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='mt-4'>
            <h4>Login</h4>
           <Button className='mb-2 p-2 ml-3' variant="outline-primary"> <FaGoogle />Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub />Login with Github</Button>

            </div>
      <div className='mt-4'>
        <h4>
            Find us on
        </h4>
    <ListGroup>
      <ListGroup.Item> <FaFacebook />Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter />Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
      
    </ListGroup>
    <Qzone></Qzone>
      </div>
    <div className='mt-4'>
    <div className = "head-text">
     <div className = "head-image">
        <img src={bg}alt="" srcset="" />
       <div className='text-on-image'>
       <h1 className='text-white'>Create an Amazing Newspaper</h1>
        <h4 className='text-white'>Lorem, ipsum eos molestias illum velit
             distinctio tempore necessitatibus, </h4>
             <Button className='bg bg-danger'>Learn more</Button>
       </div>
      </div>
     </div>
    </div>

        </div>
    );
};

export default RightNav;