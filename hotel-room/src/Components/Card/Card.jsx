import React, { useEffect, useState } from 'react';
import { FaBed } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Card = () => {
    const [details , setDetails] = useState([]);
    useEffect( () => {
        fetch('cardDetails.json')
        .then(res => res.json())
        .then(data => setDetails(data))
        .catch(error => console.log(error))
    } , [])
   
    return (
      <div className='mt-12 ml-10 flex gap-4'>

      {
        details.map(detail => (
      
        
          <div key ={detail.id} className=" card card-compact w-96 bg-base-100 shadow-xl ">
       
        <div className="card-body">
          <h2 className="card-title"> <CgProfile />{detail.hotelUser}</h2>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">

       <div className='flex gap-12 ml-2 mr-2 mt-2'>
       <div className='flex gap-4'>
         <h1 className='flex gap-1'><FaBed />{detail.room} </h1>
         <h1 className='flex gap-1'> <IoIosPeople />{detail.people} </h1> 
         <h1 className='flex gap-1' ><LuBadgeDollarSign />{detail.price}</h1> 
         </div>
          
        <div><button className=" btn btn-primary ml-11">  Book Now</button> </div>

        </div>
          </div>
            
            
           
          
          </div>
      </div>
      ))}
      </div>
      
    );
};

export default Card;