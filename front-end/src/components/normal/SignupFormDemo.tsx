"use client";
import React, { useState } from "react";
import { Label} from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

import { useDispatch, useSelector } from 'react-redux';
import {type AppDispatch, type RootState} from '../../store/store';
import {useNavigate } from 'react-router-dom'

export function SignupFormDemo() {
  
      const [email , setEmail] = useState('') ; 
      const [password , setPassword] = useState ('') ; 
      const dispatch = useDispatch<AppDispatch> ( ) ; 
      const {error , isLoading } = useSelector((state:RootState) => state.auth) 
      const navigate = useNavigate();
  
      

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{

      const resultAction = await dispatch(signUp({email , password})) ; 

      if(signUp.fulfilled.match(resultAction))
        navigate('/dashboard') ; 
      else if(signUp.rejected.match(resultAction))
        console.error('SignUp Failed' , resultAction.payload);
        
      // console.log('Sign up with email:', email, 'and password:', password)  ;
        
    }catch(error){
      console.error('Sign up Failed' , error);
    }
    
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      

      <form className="my-8" onSubmit={handleSubmit}>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email" 
          placeholder="projectmayhem@fc.com"
          type="email" 
          required
           />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
           id="password"
            placeholder="••••••••"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            type="password" 
            required
            />
        </LabelInputContainer>
   

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading? 'Signing Up...' : "Sign Up"}
           &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
