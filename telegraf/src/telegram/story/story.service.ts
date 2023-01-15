import { SceneContext } from 'telegraf/typings/scenes';
import {
  JOKES_WITH_WOMAN,
  MY_NAME_KHAMMERSON_BOT,
  GO, BACK,
  GO_BACK,
  DAVAI,
  SEE_LATER,
  COME_LATER
} from './../telegram.constants';
import { Injectable } from '@nestjs/common';
import {
  Hears,
  Start,
  Update as UpdateHere,
  Action,
  Ctx,
} from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { TelegramService } from '../telegram.service';

@UpdateHere()
@Injectable()
export class StoryService {
  constructor(private readonly telegramService: TelegramService) {}



  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(MY_NAME_KHAMMERSON_BOT,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Поехали', callback_data: GO },
              { text: 'Назад', callback_data: BACK }
            ]
          ],
        },
      }
    );
  }

  @Action(GO)
  async onAnswer(
    @Ctx() ctx: SceneContext & { update: Update.CallbackQueryUpdate }
  ) {
    const jokes = await this.telegramService.findGte18Story({ tag: JOKES_WITH_WOMAN })
    if (jokes.length !== 0) {
      const random = Math.floor(Math.random() * jokes.length);
      await ctx.reply(jokes[random].story, {
        reply_markup: {
          keyboard: [
            [{ text: DAVAI }, { text: GO_BACK }],
          ],
        }
      });
    } else {
      await ctx.reply(COME_LATER, {
        reply_markup: {
          remove_keyboard: true
        }
      });
    }
  }

  @Hears(GO_BACK)
  async stopJoke(ctx: Context) {
    await ctx.reply(SEE_LATER, {
      reply_markup: {
        remove_keyboard: true
      }
    });
  }

  @Hears(DAVAI)
  async goJoke(ctx: Context) {
    const jokes = await this.telegramService.findGte18Story({ tag: JOKES_WITH_WOMAN })
    if (jokes) {
      const random = Math.floor(Math.random() * jokes.length);
      await ctx.reply(jokes[random].story, {
        reply_markup: {
          keyboard: [
            [{ text: DAVAI }, { text: GO_BACK }],
          ],
        }
      });
    }
  }
}