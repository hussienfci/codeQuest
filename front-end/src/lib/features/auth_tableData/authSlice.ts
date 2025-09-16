
import { createSlice, type WritableDraft } from "@reduxjs/toolkit";
import type { ApiUser, AuthState, LoginCredentials } from "../../../interface/interface";
import { login, signUp } from "../../../services/userService";



const intialState:AuthState = {
    currentUser: null , 
    isLoading:false, 
    error:null 
}
export const authSlice = createSlice({
    name:"auth" , 
    initialState:intialState , 
    reducers:{
        setUser:(state  , action:{payload:ApiUser  | null} )=>{
            state.currentUser = action.payload ; 
        }
    } , 
    
    extraReducers:(builder)=>{
        builder
            .addCase(signUp.pending , (state)=>{
                state.isLoading = true ; 
                state.error = null ; 
            })
            .addCase(login.fulfilled , (state , action)=>{
                state.isLoading =  false  ; 
                state.currentUser  = {
                    username:action.payload.data.user.username ,
                    password: action.payload.data.user.password
                }  ; 
            })
            .addCase(login.rejected , (state , action)=>{
                state.isLoading = false ; 
                state.error = action.payload as string; 
            })
            .addCase(login.pending , (state)=>{
                state.isLoading = true ; 
                state.error = null ; 
            })
            .addCase(login.fulfilled , (state , action)=>{
                state.isLoading =  false  ; 
                state.currentUser  = {
                    username:action.payload.data.user.username
                }  ; 
            })
            .addCase(login.rejected , (state , action)=>{
                state.isLoading = false ; 
                state.error = action.payload as string; 
            })
    }
}); 

export const
       { setUser} = authSlice.actions ; 


