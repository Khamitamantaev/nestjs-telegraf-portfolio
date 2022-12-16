import { TelegrafContext } from './../interfaces/context.interface';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Hears, Help, InjectBot, On, Start, Update as UpdateHere, Action, Ctx, Scene, SceneEnter } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { InjectModel } from 'nestjs-typegoose';
import { TelegramStoryModel } from '../model/telegram-story.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Update } from 'telegraf/typings/core/types/typegram';
import { TelegramService } from '../telegram.service';

@UpdateHere()
@Injectable()
export class StoryService implements OnModuleInit {
  constructor(
    @InjectBot() private bot: Telegraf<TelegrafContext>,
     private readonly telegramService: TelegramService ) { }


  async onModuleInit() {
    console.log('Init')
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(`Привет! Меня зовут Хамит, хочешь получить порцию необыкновенных шуток? Тогда поехали...`,
      {
        reply_markup: {
          keyboard: [
            [{ text: 'Поехали', }, { text: 'Хватит шутить' }],
          ],
        },
      }
    );
  }

  @Action(/1|2/)
  async onAnswer(
    @Ctx() ctx: Context & { update: Update.CallbackQueryUpdate }
  ) {
    const cbQuery = ctx.update.callback_query;
    const userAnswer = 'data' in cbQuery ? cbQuery.data : null;

    if (userAnswer === '1') {
      await ctx.reply(`Привет! Меня зовут Хамит, хочешь получить порцию необыкновенных шуток? Тогда поехали...`,
        {
          reply_markup: {
            keyboard: [
              [{ text: 'Поехали' }, { text: 'Хватит шутить' }],
            ],
          },
        }
      );
    } else {
      ctx.reply('подумай еще');
    }
  }


  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @Hears('Поехали')
  async goJoke(ctx: Context) {
    // const stories = await this.telegramService.findLess18Story()
    await ctx.reply('Hey there');
  }

  @Hears('Хватит шутить')
  async stopJoke(ctx: Context) {
    await ctx.reply('Hey there');
  }
}