import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../interfaces").Response>;
    login(loginUserDto: LoginUserDto): Promise<import("../interfaces").Response>;
    findOne(id: string): Promise<import("../interfaces").Response>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
