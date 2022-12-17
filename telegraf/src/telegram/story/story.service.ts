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
    private readonly telegramService: TelegramService) { }


  async onModuleInit() {
    console.log('Init')
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(`Привет! Меня зовут Хамит, хочешь получить порцию необыкновенных шуток? Тогда поехали...`,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Поехали', callback_data: '1' }]
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
      await ctx.reply(`Тебе есть 18?`,
        {
          reply_markup: {
            keyboard: [
              [{ text: 'Да, есть' }, { text: 'Нет, но все равно' }],
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

  

  @Hears('Начнем')
  async goJokeLess18(ctx: Context) {
    // const stories = await this.telegramService.findLess18Story()
    await ctx.reply('Выбери тему', {
      reply_markup: {
        inline_keyboard: [
        [ 
          { text: 'Шутки', callback_data: '8' }, 
          { text: 'Анекдоты', callback_data: '9' },
          { text: 'Истории', callback_data: '10'}
        ],
        ],
      }
    });
  }


  @Hears('Поехали')
  async goJokeGte18(ctx: Context) {
    // const stories = await this.telegramService.findLess18Story()
    await ctx.reply('Выбери тему', {
      reply_markup: {
        inline_keyboard: [
        [ 
          { text: 'Шутки', callback_data: '11' }, 
          { text: 'Анекдоты', callback_data: '12' },
          { text: 'Истории', callback_data: '13'}
        ],
        ],
      }
    });
  }

  @Hears('Вернуться назад')
  async stopJoke(ctx: Context) {
    await ctx.reply('Будем рады видеть тебя здесь, ты все равно вернешься поржать.. Для начала тебе снова придется нажать на /start', {
      reply_markup: {
        remove_keyboard: true
      } 
    });
  }

  @Hears('Да, есть')
  async have18(ctx: Context) {
    await ctx.reply('Тогда жми кнопку и поехали..', {
      reply_markup: {
        keyboard: [
          [{ text: 'Поехали' }, { text: 'Вернуться назад' }],
        ],
      }
      
    });
  }

  @Hears('Нет, но все равно')
  async notHave18(ctx: Context) {
    await ctx.reply('Тогда жми кнопку и поехали.. У нас найдутся истории для всех возрастов', {
      reply_markup: {
        keyboard: [
          [{ text: 'Начнем' }, { text: 'Вернуться назад' }],
        ],
      }
    });
  }
}