import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthResponse, LoginCredentials, signUpCredentials } from "../interface/interface";
import { handleResponse } from "../lib/handleResponse";
import type { AppDispatch } from "../store/store";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;


export const signUp = createAsyncThunk(
  '/users/signUp' , 
  async (credentials: signUpCredentials, {rejectWithValue}): Promise<AuthResponse> => {
   const response: any = await fetch(`${API_BASE_URL}/users/register`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(credentials),
   });
   const data = response.json()
  //  console.log("SIGNUP RESPONSE:", data);
   return handleResponse(response, {rejectWithValue});
 })


export const login = createAsyncThunk(`/users/login` , 
  async (credentials: LoginCredentials, {rejectWithValue} ): Promise<AuthResponse> => {
   const response: any = await fetch(`${API_BASE_URL}/users/login`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(credentials),
   });
   return handleResponse(response, {rejectWithValue});
 })
// 
export const validateToken = createAsyncThunk(
  'auth/validateToken' , 
  async (rejectWithValue): Promise<AuthResponse> => {
    const token = localStorage.getItem('access_token') ; 

    if(!token){
      throw new Error('No authentication token found') ; 
    }

    const response = await fetch(`${API_BASE_URL}/auth/login` , {
      method:'GET' , 
      headers:{
        "Authorization": `Bearer ${token} `, 
        "Content-Type":"application/json" , 
      } ,
    }) ; 
    return handleResponse(response,  {rejectWithValue}) ; 
  } 
); 


export const initAuth = (dispatch:AppDispatch )=>{
   const token = localStorage.getItem('access_token') ; 
  
  if(token){
    dispatch(validateToken()).unwrap().catch((error)=>{
      console.log(`Auto-login failed: `, error);

      localStorage.removeItem('access_token') ; 
    }) 
  }
  return ()=>{}

}




