import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString() 
    @IsNotEmpty()
    @ApiProperty({ example: 'user@gmail.com', description: 'email' })
    userName: string ; 

    @IsString() 
    @IsNotEmpty()
    @ApiProperty({ example: '1234saszx', description: 'password' })
    password: string ; 
    

}
