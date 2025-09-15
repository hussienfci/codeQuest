


import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps{
    children: React.ReactNode
}

function ProtectedRoute({children}:ProtectedRouteProps) {
    const {currentUser, isLoading} = useAuth() ;
    const navigate  = useNavigate() 
    React.useEffect(() => {
        if (!isLoading && !currentUser) {
          console.log(isLoading , '\n' , currentUser) ;
          
           navigate('/login');
        }
    }, [currentUser, isLoading, navigate]);
    
    if (isLoading) {
      return <p className='relative text-center z-20 bg-gradient-to-b from-white to-black bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>Loading...</p>; 
    }
    return (
    <div>
       {children}
    </div>
  )
  
}

export default ProtectedRoute
