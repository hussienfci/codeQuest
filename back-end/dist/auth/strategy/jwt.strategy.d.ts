import { UsersService } from 'src/users/users.service';
import { Request } from 'express';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(request: Request, validationPayload: {
        id: number;
        role: string;
    }): Promise<any>;
    private extractJwtToken;
}
export {};
