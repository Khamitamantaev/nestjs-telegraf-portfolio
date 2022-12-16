import { TELEGRAM_BOT_KEY } from './telegram.constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { TelegrafModule } from 'nestjs-telegraf';
import config from 'src/configs/configuration';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule.forFeature(config)],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get<string>(TELEGRAM_BOT_KEY),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [TelegramController],
  providers: [TelegramService]
})
export class TelegramModule {}
