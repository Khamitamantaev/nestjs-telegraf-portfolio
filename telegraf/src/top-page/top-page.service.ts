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

    async create(dto: CreateTopPageDto): Promise<TopPageModel> {
        return this.topPageModel.create(dto)
    }

    async findById(id: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findById(id).exec()
    }

    async findByAlias(alias: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findOne({
            alias
        }).exec()
    }

    async findByCategory(dto: FindTopPageDto): Promise<TopPageModel[]> {
        console.log(dto)
        return this.topPageModel.find({
            firstCategory: dto.firstCategory
        }, { alias: 1, secondCategory: 1, title: 1}).exec() 
        // в методе find есть список полей получаемых объектов втором параметром, мне нужно alias, secondCategory, title
    }

    async deleteById(id: string): Promise<TopPageModel | undefined> {
        return this.topPageModel.findByIdAndDelete(id).exec()
    }

    async updateById(id: string, dto: CreateTopPageDto): Promise<TopPageModel> {
        return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec()
    }
}
