import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { Outlet } from 'react-router-dom';
import pic from '../../assets/pic.jpg'
import './Home.css'

const Home = () => {
    return (
        <div >
         
        <img className='pic' src={pic} alt="" /> 
          <Card></Card>
           
        
           
        </div>
    );
};

export default Home;