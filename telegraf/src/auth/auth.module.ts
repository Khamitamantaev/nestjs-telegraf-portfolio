import { getJwtConfig } from './../configs/jwt.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_CONSTANTS } from './../configs/constants';
import { UserModel } from './model/user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
    {
      typegooseClass: UserModel,
      schemaOptions: {
        collection: APP_CONSTANTS.COLLECTIONS.USER
      }
    }
  ]),
  JwtModule.registerAsync({
    imports: [
      ConfigModule
    ],
    inject: [ConfigService],
    useFactory: getJwtConfig
  })
],
  providers: [AuthService, UserService]
})
export class AuthModule {}
