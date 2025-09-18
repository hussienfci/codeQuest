
import { createSlice} from "@reduxjs/toolkit";
import type { ApiUser, AuthResponse, AuthState, LoginCredentials } from "../../../interface/interface";
import { login, signUp, validateToken } from "../../../services/userService";



const intialState:AuthState = {
    currentUser: null , 
    isLoading:false, 
    error:null  , 
    access_token: localStorage.getItem('access_token')  
}
export const authSlice = createSlice({
    name:"auth" , 
    initialState:intialState , 
    reducers:{
        setUser:(state  , action:{payload:AuthState  | null } )=>{
            state.currentUser = action.payload?.currentUser ?? null ; 
            state.access_token = action.payload?.access_token ?? null ;  
        }, 
        logout:(state)=>{ 
            state.currentUser = null ; 
            state.error = null ; 
            state.isLoading = false ; 
            state.access_token = null ; 
            localStorage.removeItem('access_token') ; 
        }
    } , 
    
    extraReducers:(builder)=>{
        builder
        // Sign-Up
            .addCase(signUp.pending , (state)=>{
                console.log("SIGNUP RESPONSE:");
                state.isLoading = true ; 
                state.error = null ; 
            })
            .addCase(signUp.fulfilled , (state , action)=>{
                state.isLoading =  false  ; 
                state.currentUser  = null ; 
                console.log("SIGNUP RESPONSE:" , action.payload.data);
                
                const payload = action.payload;
                if (!payload || !payload.data) {
                    state.error = "Signup fulfilled but response was empty or malformed.";
                    return;
                }

                const token = payload.data.access_token;
                if (token) {
                    state.access_token = token;
                    localStorage.setItem("access_token", token);
                } else {
                    state.error = "Signup successful but token missing from response.";
                }

                localStorage.setItem('access_token', action.payload.data.access_token as string)  ; 
            })
            .addCase(signUp.rejected , (state , action)=>{
                state.isLoading = false ; 
                state.error = action.payload as string; 
            })
            // Login
            .addCase(login.pending , (state)=>{
                state.isLoading = true ; 
                state.error = null ; 
            })
            .addCase(login.fulfilled , (state , action)=>{
                state.isLoading =  false  ; 
                state.currentUser  = {
                    userName:action.payload.data.user.userName
                }  ; 
                state.access_token = action.payload.data.access_token?? null ; 
                localStorage.setItem('access_token' , action.payload.data.access_token as string)
            })
            .addCase(login.rejected , (state , action)=>{
                state.isLoading = false ; 
                state.error = action.payload as string; 
            })
            // Validate token
            .addCase(validateToken.pending , (state)=>{
                state.isLoading = true ; 
                state.error = null ; 
            })
            .addCase(validateToken.fulfilled , (state , action)=>{
                state.isLoading =  false  ; 
                state.currentUser  = {
                    userName:action.payload.data.user.userName
                }  ; 
                state.access_token = action.payload.data.access_token?? null ; 
                state.error = null ; 
            })
            .addCase(validateToken.rejected , (state , action)=>{
                state.isLoading = false ; 
                state.error = action.payload as string; 
                state.currentUser = null ; 
                state.access_token = null ; 
                localStorage.removeItem('access_token') ; 
            })
    }
}); 

export const
       { setUser} = authSlice.actions ; 


