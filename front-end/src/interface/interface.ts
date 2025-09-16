
export interface ApiUser {
  
      id?: string;
      username: string;
      password?:string ;
  
}
export interface AuthState{
    currentUser:ApiUser | null ; 
    isLoading: boolean ; 
    error:string | null ; 
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
}

export interface AuthResponse {
  data: {
    user: {
      role: "admin" | "user";
      username: string;
      password?:string ; 
    };
    token: string;
  };
}