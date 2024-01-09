import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from './EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details, image_url,category_id} = news;
    console.log(title)
    return (
     <div>

<Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      <Link to={`/category/${category_id}`}>  <Button variant="danger"> <FaArrowLeft />All News in the category
      
        
      </Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsight></EditorsInsight>

     </div>
     
  

    );
};

export default News;