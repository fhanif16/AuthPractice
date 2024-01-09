import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Terms and Conditons</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. D
                electus vero, nihil laboriosam reiciendis suscipit eos
                 deserunt perferendis quam similique cupiditate eligendi 
                 blanditiis sint fugiat, 
                libero ea optio! Modi, distinctio repudiandae.</p>
                <p>Go back To <Link to="/register" >Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;


