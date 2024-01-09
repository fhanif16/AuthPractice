


import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import {
   
  Navigate,
  createBrowserRouter,
 
} from "react-router-dom";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../pages/Shared/TermsAndConditions/TermsAndConditions";


const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element: <Navigate to='/category/0'></Navigate>
        
      },
      {
        path:'login',
        element:<Login></Login>
      }
      , {
        path:'register',
        element:<Register></Register>
      } , 
      {
        path:'terms',
        element:<TermsAndConditions></TermsAndConditions>
      }
    ]

  },
    {
      path: 'category',
      element: <Main></Main>,
      children:[
      
       
        
        {
          path:':id',
          element:<Category></Category>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-nhgwl5nzl-fatema-hanifs-projects.vercel.app/categories/${params.id}`)
        }
      ]

    },

    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader:({params}) => fetch(`https://the-news-dragon-server-nhgwl5nzl-fatema-hanifs-projects.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router;