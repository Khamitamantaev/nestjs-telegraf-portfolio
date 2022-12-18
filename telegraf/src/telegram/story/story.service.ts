import { SceneContext } from 'telegraf/typings/scenes';
import { JOKES_WITH_WOMAN } from './../telegram.constants';
import { TelegrafContext } from './../interfaces/context.interface';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Hears, Help, InjectBot, On, Start, Update as UpdateHere, Action, Ctx, Scene, SceneEnter } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { TelegramService } from '../telegram.service';

@UpdateHere()
@Injectable()
export class StoryService implements OnModuleInit {
  constructor(
    @InjectBot() private bot: Telegraf<TelegrafContext>,
    private readonly telegramService: TelegramService) { }


  async onModuleInit() {
    console.log('Init')
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(`Привет! Меня зовут KhammersonBot, хочешь получить порцию необыкновенных шуток? Тогда поехали...`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Поехали', callback_data: 'go' },
              { text: 'Назад', callback_data: 'back' }
            ]
          ],
        },
      }
    );
  }

  @Action('go')
  async onAnswer(
    @Ctx() ctx: SceneContext & { update: Update.CallbackQueryUpdate }
  ) {
    const cbQuery = ctx.update.callback_query;
    const userAnswer = 'data' in cbQuery ? cbQuery.data : null;
    const jokes = await this.telegramService.findGte18Story({ tag: JOKES_WITH_WOMAN })
    if (jokes) {
      const random = Math.floor(Math.random() * jokes.length);
      await ctx.reply(jokes[random].story, {
        reply_markup: {
          keyboard: [
            [{ text: 'Давай еще..' }, { text: 'Вернуться назад' }],
          ],
        }
      });
    }
  }

  @Hears('Вернуться назад')
  async stopJoke(ctx: Context) {
    await ctx.reply('Будем рады видеть тебя здесь, ты все равно вернешься поржать.. Для начала тебе снова придется нажать на /start', {
      reply_markup: {
        remove_keyboard: true
      }
    });
  }

  @Hears('Давай еще..')
  async goJoke(ctx: Context) {
    const jokes = await this.telegramService.findGte18Story({ tag: JOKES_WITH_WOMAN })
    if (jokes) {
      const random = Math.floor(Math.random() * jokes.length);
      await ctx.reply(jokes[random].story, {
        reply_markup: {
          keyboard: [
            [{ text: 'Давай еще..' }, { text: 'Вернуться назад' }],
          ],
        }
      });
    }
  }
}