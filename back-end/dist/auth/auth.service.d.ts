import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly userServices;
    constructor(jwtService: JwtService, userServices: UsersService);
    generateAccessToken(payload: any): Promise<{}>;
}
