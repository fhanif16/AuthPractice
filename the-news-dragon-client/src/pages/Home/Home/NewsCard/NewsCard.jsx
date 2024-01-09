import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { CiBookmark} from "react-icons/ci";
import {CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Rating from 'react-rating';
import { GoStar } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";



const NewsCard = ({news}) => {
    const {_id, title, details, image_url,author , total_view, rating} = news;
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex align-items-center '>
           
            
          <Image style={{height:'40px' , width:'40px' }}  src={author?.img} roundedCircle />
          <div className='ps-2 flex-grow-1'>
            <p className='mb-0'>{author.name}</p>
         
            <p><small>{moment(author?.published_date).format('YYYY MMMM DD')}</small></p>
          </div>
        
           <div className=''> 
           <CiBookmark />
          <CiShare2 />

           </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length <250 ? <>{details}</> : 
            <>{details.slice(0, 250)}.......  <Link to={`/news/${_id}`}>Read More</Link>
            </>
            }
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted d-flex">

        <div className='flex-grow-1'>
            <Rating 
            readonly
          
            placeholderRating={rating.number}
            emptySymbol={<GoStar />}
            placeholderSymbol={<MdOutlineStarPurple500 className='text-warning'/>}
            fullSymbol={<MdOutlineStarPurple500 />}
          />
            
            
          


            
      
            <span>{rating.number}</span>
        </div>


        <div>
        <FaEye /> {total_view}
        </div>
        </Card.Footer>
      </Card>
    );
  }
  
export default NewsCard;

