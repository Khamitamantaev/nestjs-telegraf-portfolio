import { JwtService } from '@nestjs/jwt';
import { UserModel } from './model/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcryptjs';
import { PASSWORD_NOT_VALID_ERROR, USER_NOT_FOUND } from './auth.constants';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string) : Promise<Pick<UserModel, 'email'>> {
        const user = await this.userService.findUser(email)
        if (!user) {
            throw new UnauthorizedException(USER_NOT_FOUND)
        }
        const isCorrectPassword = await compare(password, user.passwordHash)
        if (!isCorrectPassword) {
            throw new UnauthorizedException(PASSWORD_NOT_VALID_ERROR)
        }
        return { email: user.email }
    }

    async login(email: string) {
        const payload = { email }
        return {
            accessToken: await this.jwtService.signAsync(payload)
        }
    }
}
