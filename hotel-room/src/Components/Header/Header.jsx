// Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='pic'>
      <div className='flex gap-2'>
        <Link className='ml-5 mt-5' to='/home'>
          Home
        </Link>
        <Link className='ml-5 mt-5' to='/login'>
          Login
        </Link>
        <Link className='ml-5 mt-5' to='/book'>
          Book
        </Link>
        <Link className='ml-5 mt-5' to='/register'>
          Register
        </Link>
      </div>
      {/* <div>
        <h1 className='text-center text-zinc-50 -mb-0 mt-96'>Ekra's Famous Outing</h1>
        <h4 className='text-center text-zinc-50 mb-0'>Come and Enjoy</h4>
      </div> */}
      
    </div>
  );
};

export default Header;
