import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './auth.service';
// import { AppleStrategy } from './strategy/apple.strategy';


@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'T!@!8934',
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [],
  providers: [JwtStrategy, AuthService],
  exports: [AuthService]
})
export class AuthModule { }
