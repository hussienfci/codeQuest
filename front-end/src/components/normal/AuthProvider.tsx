import React, {type ReactNode, useEffect } from 'react'
import { type AppDispatch }  from '../../store/store';
import { useDispatch } from 'react-redux';
// import { initAuth } from '../../services/authService';

interface AuthProviderProps{
    children:ReactNode  ; 
}

function AuthProvider({children}:AuthProviderProps) {
    const dispatch= useDispatch<AppDispatch>() ; 
  
    // useEffect(() => {
    //     const unsubscribe = initAuth(dispatch) ; 
    //     return ()=> unsubscribe() ; 
    // }, [dispatch])
    return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
