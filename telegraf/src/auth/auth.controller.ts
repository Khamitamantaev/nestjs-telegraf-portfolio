import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { UserService } from './user/user.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService,
		private readonly userService: UserService
	) { }

	/**
	 * Метод для регистрации пользователя
	 */
	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {
		const findUser = await this.userService.findUser(dto.login);
		if (findUser) {
			throw new BadRequestException(ALREADY_REGISTERED_ERROR);
		}
		const user = await this.userService.createUser(dto);
		const token = await this.authService.login(user.email)
		return {
			...user,
			token
		}
	}


	/**
	 * Метод для логина пользователя
	 */
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() { login, password }: AuthDto) {
		const user = await this.authService.validateUser(login, password);
		const token = await this.authService.login(user.email)
		return {
			...user,
			token
		};
	}
}
