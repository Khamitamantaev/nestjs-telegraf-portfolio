import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const findUser = await this.authService.findUser(dto.login)
        if(findUser) {
            throw new BadRequestException(ALREADY_REGISTERED_ERROR)
        }

        return this.authService.createUser(dto)
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {

    }
}
