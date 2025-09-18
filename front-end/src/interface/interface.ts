
export interface ApiUser {
      
      id?: string;
      userName: string;
      email?:string ;
      password?:string ;
      // token?: string ;  
  
}
export interface AuthState{
    currentUser:ApiUser | null ; 
    isLoading: boolean ; 
    error:string | null ; 
    access_token: string | null; 
}

export interface SingelUser {
  data: any
}


export interface UserUpdate {
  userName?: string;
  password?: string; 
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface signUpCredentials {
  email: string;
  password: string;
  userName: string ;
}

export interface AuthResponse {
  data: {
    user: {
      role?: "admin" | "user";
      userName: string;
      password?:string ; 
      email? :string ;
    };
    access_token?: string;
  };
}