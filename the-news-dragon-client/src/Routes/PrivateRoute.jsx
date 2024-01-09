import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return  <div>
            <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to ="/login" replace></Navigate>
};

export default PrivateRoute;

/* check user is logged in or not
2.if user is logged in, then allow them to visit route
3.else redirect to user login page
4. setUp private router
*
*/