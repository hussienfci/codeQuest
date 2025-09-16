import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthResponse, LoginCredentials, signUpCredentials } from "../interface/interface";
import { handleResponse } from "../lib/handleResponse";

// Centralized API base URL (easily configurable later)
const API_BASE_URL = import.meta.env.VITE_BASE_URL;


export const signUp = createAsyncThunk(
  '/register' , 
  async (credentials: signUpCredentials): Promise<AuthResponse> => {
   const response: any = await fetch(`${API_BASE_URL}/register`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(credentials),
   });
   return handleResponse(response);
 })


export const login = createAsyncThunk(`/auth/login` , 
  async (credentials: LoginCredentials): Promise<AuthResponse> => {
   const response: any = await fetch(`${API_BASE_URL}/auth/login`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(credentials),
   });
   return handleResponse(response);
 })


