import { ReviewModel } from './../review/model/review.model';
import { APP_CONSTANTS } from './../configs/constants';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductModel } from './model/product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductModel) private readonly productModel: ReturnModelType<typeof ProductModel>
    ) { }

    async create(dto: CreateProductDto): Promise<ProductModel> {
        return this.productModel.create(dto)
    }

    async findById(id: string): Promise<ProductModel | undefined> {
        return this.productModel.findById(id).exec()
    }

    async deleteById(id: string): Promise<ProductModel | undefined> {
        return this.productModel.findByIdAndDelete(id).exec()
    }

    async updateById(id: string, dto: CreateProductDto): Promise<ProductModel> {
        return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec()
    }

    async findWithReviews(dto: FindProductDto) {
         return await this.productModel.aggregate([
            {
                $match: { categories: dto.category } 
            },
            {
                $sort: {
                    _id: 1 // сортировка чтобы упорядочить 
                },
            },
            {
                $limit: dto.limit // лимит получаемых данных 
            },
            {
                $lookup: {
                    from: APP_CONSTANTS.COLLECTIONS.REVIEW, // масссив reviews where productId === _id продукта
                    localField: "_id", // _id продукта
                    foreignField: 'productId', // productId review равный localField _id продукта
                    as: 'reviews' // как массив reviews при получении 
                }
            },
            {
                $addFields: {
                    reviewCount: { $size: '$reviews' }, // количество найденных элементо в массиве reviews
                    reviewAvg: { $avg: '$reviews.rating' }, // рассчитывает средний рейтинг всех ревью в массиве reviews
                    reviews: {
                        $function: {
                            body: `function(reviews) {
                                reviews.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                                return reviews
                            }`,
                            args: ['$reviews'], // массив аргументов переданных функции для выполнения
                            lang: 'js'
                        }
                    }
                }
            }]).exec()
    }
}
