import { type AppDispatch } from "../store/store";
import { auth } from "../lib/firebase"; 
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
// import { loginSuccess, setError, setUser } from "../lib/features/auth_tableData/authSlice";

// import setUser
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../lib/features/auth_tableData/authSlice";



import type { ApiUser, SingelUser, UserUpdate } from '../interface/interface';
import { handleResponse } from "../utils/handleResponse";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchActiveUsers = async (currentPage?: number): Promise<ApiUser> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await fetch(`${BASE_URL}/dashboard/users?status=active&page=${currentPage}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
};

export const fetchOneUser = async (id: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await fetch(`${BASE_URL}/dashboard/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
};

export const fetchCurrentUser = async (): Promise<SingelUser> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await fetch(`${BASE_URL}/users/currentUser`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
};

export const fetchDeleteUsers = async (id: string): Promise<ApiUser> => {

  console.log(id);

  const token = localStorage.getItem('token')
  if (!token) throw new Error('No Token Found')

  const response = await fetch(`${BASE_URL}/users/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
  return handleResponse(response)
}

export const fetchChangeStatusForUser = async (id: string): Promise<ApiUser> => {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('No Token Found')

  const response = await fetch(`${BASE_URL}/dashboard/users/${id}/status`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
  return handleResponse(response)
}

export const fetchUpdateUser = async (body: UserUpdate, userId: string): Promise<ApiUser> => {
  const data = {
    email: body.email,
    username: body.userName,
    country: body.country,
    type: body.accountType
  }
  const token = localStorage.getItem('token')
  if (!token) throw new Error('No Token Found')
  console.log(body);

  const response = await fetch(`${BASE_URL}/dashboard/users/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  return handleResponse(response)
}

export const updateCurrentUser = async ({ username, password, imageUrl }: any): Promise<SingelUser> => {
  // const data = {
  //   email: body.email,
  //   username: body.userName,
  //   country: body.country,
  //   type: body.accountType
  // }
  const token = localStorage.getItem('token')
  if (!token) throw new Error('No Token Found')

  const formData = new FormData()
  if (username) formData.append("username", username)
  if (password) formData.append("password", password)
  if (imageUrl) formData.append("imageUrl", imageUrl)

  const response = await fetch(`${BASE_URL}/dashboard/users/currentUser`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData
  })
  return handleResponse(response)
}


