import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => UsersService))
        private readonly userServices: UsersService
    ) { }

    async generateAccessToken(payload: any) {
        const user = await this.userServices.findOne(payload.id); 
        // console.log(user);
        
        const access_token = await this.jwtService.signAsync({ id: user.data.id, role: user.data.role }, { secret: 'T!@!8934' });
        await this.userServices.updateAccessToken(user.data.id, access_token)
        console.log(user);
        
        return {
            access_token: access_token,
        }
    }
}