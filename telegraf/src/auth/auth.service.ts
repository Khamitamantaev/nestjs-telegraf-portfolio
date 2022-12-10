import { UserModel } from './model/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthDto } from './dto/auth.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ReturnModelType<typeof UserModel>
    ) {}

    async createUser(dto: AuthDto) {
        const salt = genSaltSync(10) 
        const newUser = new this.userModel({
            email: dto.login,
            passwordHash: hashSync(dto.password, salt)
        })

        return newUser.save()
    }


    async findUser(email: string) {
        return this.userModel.findOne({ email}).exec()
    }
}
