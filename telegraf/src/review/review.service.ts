import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './model/review.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from "@typegoose/typegoose";
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';

@Injectable()
export class ReviewService {
    constructor(@InjectModel(ReviewModel) private readonly reviewModel: ReturnModelType<typeof ReviewModel>) { }

    /**
     * Метод создает рейтинг модель в базе 
     * @param dto dto используемая для создания рейтинга
     */
    async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
        return this.reviewModel.create(dto)
    }

    /**
     * Метод удаляет рейтинг модель в базе 
     * @param id id удаляемого рейтинга в базе
     */
    async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
        return this.reviewModel.findByIdAndDelete(id).exec()
    }

    /**
     * Метод ищет рейтинги в базе по productId 
     * @param productId productId по которому нужно найти рейтинги в базе
     */
    async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
        return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec()
    }

    /**
     * Метод удаляет рейтинги в базе по productId 
     * @param productId productId по которому нужно найти рейтинги в базе и удалить
     */
    async deleteByProductId(productId: string) {
        return this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec()
    }
}
