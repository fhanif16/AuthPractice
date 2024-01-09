import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
           <nav>
             <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to ='/register'>Register</Link>
            <Link to ='/register-react'>RegisterReact</Link>
            <Link to='/register-bs'>RegisterBs</Link>
           </nav>
       
    );
};

export default Header;