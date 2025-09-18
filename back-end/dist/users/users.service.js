"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const classes_1 = require("../classes");
const bycrpt = __importStar(require("bcrypt"));
const auth_service_1 = require("../auth/auth.service");
let UsersService = class UsersService {
    userRepo;
    response;
    authService;
    constructor(userRepo, response, authService) {
        this.userRepo = userRepo;
        this.response = response;
        this.authService = authService;
    }
    async createUser(createUserDto) {
        try {
            const { password, ...otherData } = createUserDto;
            const hashPassword = await bycrpt.hash(password, 10);
            const newUser = this.userRepo.create({ password: hashPassword, ...otherData });
            const savedUser = await this.userRepo.save(newUser);
            const access_token = await this.authService.generateAccessToken(savedUser);
            console.log(access_token);
            return this.response.success(classes_1.SuccessStatusCodesEnum.Created, 'user created successfully', access_token);
        }
        catch (error) {
            return this.response.error(classes_1.ErrorStatusCodesEnum.BadRequest, error.message);
        }
    }
    async login(loginUserDto) {
        try {
            const { userName, password } = loginUserDto;
            const user = await this.userRepo.findOne({ where: { userName } });
            if (!user)
                return this.response.error(classes_1.ErrorStatusCodesEnum.NotFound, 'Invalid email or password');
            const isUserPassword = await bycrpt.compare(password, user.password);
            const access_token = await this.authService.generateAccessToken(user);
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Login successfully');
        }
        catch (error) {
            return this.response.error(classes_1.ErrorStatusCodesEnum.BadRequest, error.message);
        }
    }
    async validateToken(id) {
        const user = await this.userRepo.findOneBy({ id });
        return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Token validated successfully', { user, access_token: user?.token });
    }
    async updateAccessToken(userId, refreshToken) {
        await this.userRepo.update(userId, {
            token: refreshToken
        });
    }
    findAll() {
        return `This action returns all users`;
    }
    async findOne(id) {
        try {
            const user = await this.userRepo.findOneBy({ id });
            if (!user)
                return this.response.error(classes_1.ErrorStatusCodesEnum.NotFound, 'user not found');
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'user fetched sucessfully', user);
        }
        catch (error) {
            return this.response.error(classes_1.ErrorStatusCodesEnum.BadRequest, error.message);
        }
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        classes_1.Expose,
        auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map