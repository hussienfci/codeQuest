import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Expose } from 'src/classes';
import { LoginUserDto } from './dto/login-user-dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    userRepo: Repository<User>;
    private readonly response;
    private readonly authService;
    constructor(userRepo: Repository<User>, response: Expose, authService: AuthService);
    createUser(createUserDto: CreateUserDto): Promise<import("../interfaces").Response>;
    login(loginUserDto: LoginUserDto): Promise<import("../interfaces").Response>;
    updateAccessToken(userId: number, refreshToken: string): Promise<void>;
    findAll(): string;
    findOne(id: number): Promise<import("../interfaces").Response>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
