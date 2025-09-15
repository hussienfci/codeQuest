
export interface ApiUser {
  items: [
    {
      id: string;
      username: string;
      password:string ;
      role: string ; 
    }
  ];
}

export interface SingelUser {
  data: any
}


export interface UserUpdate {
  userName?: string;
}