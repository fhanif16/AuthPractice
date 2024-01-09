import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsight from '../../News/EditorsInsight';
import { Row } from 'react-bootstrap';

const LeftNav = () => {
    const [categories , setCategories] = useState([]);
    useEffect( () => {
        fetch('https://the-news-dragon-server-nhgwl5nzl-fatema-hanifs-projects.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
       <h1>All categories</h1>
       <div>
       { categories.map(category => <p key={category.id}>
        <Link to={`/category/${category.id}`} className='ps-4  text-black text-decoration-none'>{category.name}</Link>
       </p>)
}
       </div>

      <div >
     
        <EditorsInsight></EditorsInsight>
      
      </div>
        </div>
        
    );
};

export default LeftNav;

