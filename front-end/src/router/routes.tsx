import { createBrowserRouter } from 'react-router-dom'

import { lazy, Suspense } from "react";
import Register from '../app/Register/page';
import LogIn from '../app/login/page';
import Dashboard from '../app/dashboard/page';



export const router = createBrowserRouter([
  {
   path:'/'  , 
   element:<LogIn/>
  },
  {
    path:'/Register'  , 
    element:<Register/>
  }, 
  {
    path:'/dashboard'  , 
   element:<Dashboard/>
  
  }
 
]);
