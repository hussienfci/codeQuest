
import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name:"auth" , 
    initialState:"" , 
    reducers:{
        setUser:(state  , action:{payload:User  | null} )=>{
            state.currentUser = action.payload ; 
        }
    } , 
 
}); 

export const
       { setUser} = authSlice.actions ; 
//  {loginSuccess ,
//       setError, setLoading, clearError}


