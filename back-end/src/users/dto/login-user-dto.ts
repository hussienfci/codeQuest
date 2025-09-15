import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class LoginUserDto{

    @IsString()
    @IsNotEmpty() 
    @ApiProperty({example: 'HMMSS' , description:'Enter UserName'}) 
    userName: string ; 
    
    @IsString()
    @IsNotEmpty() 
    @ApiProperty({example: '213xac' , description:'Enter password'}) 
    password: string ; 
    
}