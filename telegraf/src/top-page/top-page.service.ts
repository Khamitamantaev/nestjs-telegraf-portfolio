import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './model/top-page.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class TopPageService {
    constructor(@InjectModel(TopPageModel) private readonly topPageModel: ReturnModelType<typeof TopPageModel>) {
    }

    /**
     * Метод создает модель страницы в базе 
     * @param dto dto используемая для создания модели страницы
     */
    async create(dto: CreateTopPageDto): Promise<TopPageModel> {
        return this.topPageModel.create(dto)
    }

    /**
     * Метод получает модель страницы в базе 
     * @param id id используемая для получения страницы
     */
    async findById(id: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findById(id).exec()
    }

    /**
     * Метод получает модель страницы в базе по alias-у 
     * @param alias alias используемая для получения страницы
     */
    async findByAlias(alias: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findOne({
            alias
        }).exec()
    }

    /**
     * Метод получает модели страниц(массив) в базе по категории 
     * В методе find есть список полей получаемых объектов втором параметром, мне нужно alias, secondCategory, title
     * @param dto dto используемая для получения страниц по категории
     */
    async findByCategory(dto: FindTopPageDto): Promise<TopPageModel[]> {
        console.log(dto)
        return this.topPageModel.find({
            firstCategory: dto.firstCategory
        }, { alias: 1, secondCategory: 1, title: 1}).exec() 
        // 
    }

    /**
     * Метод удаляет модель страницы в базе по id
     * @param id id используемая для удаления страницы
     */
    async deleteById(id: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findByIdAndDelete(id).exec()
    }

    /**
     * Метод обновляет модель страницы в базе по id, получая данные из dto
     * @param id id используемая для обновления страницы
     * @param dto id используемая для обновления полей найденной страницы
     */
    async updateById(id: string, dto: CreateTopPageDto): Promise<TopPageModel> {
        return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec()
    }
}
