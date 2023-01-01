import { JwtService } from '@nestjs/jwt';
import { UserModel } from './model/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { PASSWORD_NOT_VALID_ERROR, USER_NOT_FOUND } from './auth.constants';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) { }

	/**
     * Метод для валидации при логине
     * @param email email для проверки существования пользователя в базе 
     * @param password Пароль для проверки с хешированным паролем из базы
     * @returns Возвращает провалидированного юзера, если у него верный пароль
     */
	async validateUser(email: string, password: string): Promise<Pick<UserModel, 'email' | '_id' | 'createdAt'>> {
		const user = await this.userService.findUser(email);
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND);
		}
		const isCorrectPassword = await compare(password, user.passwordHash);
		if (!isCorrectPassword) {
			throw new UnauthorizedException(PASSWORD_NOT_VALID_ERROR);
		}
		return { email: user.email, _id: user._id, createdAt: user.createdAt };
	}

	/**
     * Метод для логина после валидации
     * @param email получаемый email для логина
     * @returns Возвращает токен access
     */
	async login(email: string) {
		const payload = { email };
		return {
			accessToken: await this.jwtService.signAsync(payload)
		};
	}
}
