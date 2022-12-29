import { APP_CONSTANTS } from 'src/configs/constants';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
export const getJwtConfig = async (configService: ConfigService): Promise<JwtModuleOptions>  => {
	return {
		secret: configService.get(APP_CONSTANTS.JWT.SECRET)
	};
};