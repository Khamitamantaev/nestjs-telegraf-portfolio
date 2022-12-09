import { APP_CONSTANTS } from './../configs/constants';
import { AuthModel } from './model/auth.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [TypegooseModule.forFeature([
    {
      typegooseClass: AuthModel,
      schemaOptions: {
        collection: APP_CONSTANTS.COLLECTIONS.AUTH
      }
    }
  ])]
})
export class AuthModule {}
