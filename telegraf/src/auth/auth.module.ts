import { APP_CONSTANTS } from './../configs/constants';
import { UserModel } from './model/user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [TypegooseModule.forFeature([
    {
      typegooseClass: UserModel,
      schemaOptions: {
        collection: APP_CONSTANTS.COLLECTIONS.USER
      }
    }
  ])],
  providers: [AuthService]
})
export class AuthModule {}
