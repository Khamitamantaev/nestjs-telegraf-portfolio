import { UpdateTelegramStoryDto } from './dto/update-telegram-story.dto';
import { FindTelegramStoryDto } from './dto/find-telegram-story.dto';
import { CreateTelegramStoryDto } from './dto/create-telegram-story.dto';
import { ReturnModelType } from '@typegoose/typegoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TelegramStoryModel } from './model/telegram-story.model';

@Injectable()
export class TelegramService {
  constructor(
    @InjectModel(TelegramStoryModel) private readonly telegramStoryModel: ReturnModelType<typeof TelegramStoryModel>
  ) { }

  /**
   * Метод создает историю  в базе 
   * @param dto dto используемая для создания истории
   */
  async create(dto: CreateTelegramStoryDto): Promise<TelegramStoryModel> {
    return this.telegramStoryModel.create(dto);
  }

  /**
   * Метод находит историю в базе 
   * @param id id найденной истории в базе
   * @returns Возвращает объект найденной истории из базы
   */
  async findById(id: string): Promise<TelegramStoryModel | undefined> {
    return this.telegramStoryModel.findById(id).exec();
  }

  /**
   * Метод удаляет историю в базе 
   * @param id id удаляемой истории в базе
   * @returns Возвращает объект удаленной истории из базы
   */
  async deleteById(id: string): Promise<TelegramStoryModel | undefined> {
    return this.telegramStoryModel.findByIdAndDelete(id).exec();
  }

  /**
   * Метод обновляет историю найденную по id, полями из dto
   * @param id id обновляемой истории в базе
   * @param id dto для обновления полей  найденной истории в базе
   */
  async updateById(id: string, dto: UpdateTelegramStoryDto): Promise<TelegramStoryModel> {
    return this.telegramStoryModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  /**
 * -18 
 * @param dto dto того, чтобы найти массив истории по тегу для -18
 */
  async findLess18Story(dto: FindTelegramStoryDto) {
    return this.telegramStoryModel.find({ age: { $lte: 18 }, tags: dto.tag })
  }

  /**
  * +18 
  * @param dto dto того, чтобы найти массив истории по тегу для +18
  */
  async findGte18Story(dto: FindTelegramStoryDto) {
    return this.telegramStoryModel.find({ age: { $gte: 18 }, tags: dto.tag })
  }
}
