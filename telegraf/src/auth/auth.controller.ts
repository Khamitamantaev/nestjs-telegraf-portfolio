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
        ) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const findUser = await this.userService.findUser(dto.login)
        if(findUser) {
            throw new BadRequestException(ALREADY_REGISTERED_ERROR)
        }
        return this.userService.createUser(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    async login(@Body() { login, password }: AuthDto) {
        const { email } = await this.authService.validateUser(login, password)

        return this.authService.login(email)
    }
}
