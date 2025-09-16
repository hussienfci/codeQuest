import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ErrorStatusCodesEnum, Expose, SuccessStatusCodesEnum } from 'src/classes';
import * as bycrpt from 'bcrypt' ; 
import { LoginUserDto } from './dto/login-user-dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User) public userRepo: Repository<User>,
    private readonly response:Expose , 
    private readonly authService: AuthService
  ){}
  
  async createUser(createUserDto: CreateUserDto) {
    try{
      const {password , ...otherData} = createUserDto ; 
      const hashPassword = await bycrpt.hash(password , 10)
      const newUser = this.userRepo.create({password:hashPassword , ...otherData}) ; 
      
      const savedUser = await this.userRepo.save(newUser) ; 
      const access_token = await this.authService.generateAccessToken(savedUser) ; 

      return this.response.success(SuccessStatusCodesEnum.Created , 
            'user created successfully' , access_token 
      )

    }catch(error){
      return this.response.error(ErrorStatusCodesEnum.BadRequest , error.message)
    }
  }

  async login(loginUserDto: LoginUserDto){
    try{
      const {userName , password} = loginUserDto ; 
      const user = await this.userRepo.findOne({where: {userName}}) ; 
      if(!user)
         return this.response.error(ErrorStatusCodesEnum.NotFound , 'Invalid email or password') 
      const isUserPassword = await bycrpt.compare(password , user.password) ; 
      const access_token = await this.authService.generateAccessToken(user) ; 
      return this.response.success(SuccessStatusCodesEnum.Ok, 'Login successfully') ; 

    }catch(error){
      return this.response.error(ErrorStatusCodesEnum.BadRequest , error.message) ;
    }
  }

  async updateAccessToken(userId: number , refreshToken: string ){
    await this.userRepo.update(userId , {
      token: refreshToken 
    })
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
