import { TypegooseModule } from 'nestjs-typegoose';
import { TELEGRAM_BOT_KEY } from './telegram.constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { TelegrafModule } from 'nestjs-telegraf';
import config from 'src/configs/configuration';
import { TelegramStoryModel } from './model/telegram-story.model';
import { APP_CONSTANTS } from 'src/configs/constants';
import { StoryService } from './story/story.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TelegramStoryModel,
        schemaOptions: {
          collection: APP_CONSTANTS.COLLECTIONS.TELEGRAM_STORY_MODEL
        }
      }
    ]),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule.forFeature(config)],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get<string>(TELEGRAM_BOT_KEY),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [TelegramController],
  providers: [TelegramService, StoryService]
})
export class TelegramModule { }
