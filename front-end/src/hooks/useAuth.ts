import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch,type RootState } from '../store/store'
import { useEffect } from "react";
import { initAuth } from "../services/userService";



export const useAuth = ()=>{
    const dispatch = useDispatch<AppDispatch>() ; 
    const {currentUser , isLoading , error} = useSelector((state:RootState) => state.auth)   ; 


    useEffect(()=> {
        const unsubscribe = initAuth(dispatch) ; 
        return ()=> unsubscribe() ; 
    }, [dispatch]) ; 

    return {currentUser , isLoading , error} ; 

} ;
