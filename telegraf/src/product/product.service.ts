import { UpdateProductDto } from './dto/update-product.dto';
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

	/**
	 * Метод создает продукт  в базе 
	 * @param dto dto используемая для создания продукта
	 */
	async create(dto: CreateProductDto): Promise<ProductModel> {
		return this.productModel.create(dto);
	}

	/**
	 * Метод находит продукт в базе 
	 * @param id id найденного продукта в базе
	 * @returns Возвращает объект найденного продукта из базы
	 */
	async findById(id: string): Promise<ProductModel | undefined> {
		return this.productModel.findById(id).exec();
	}

	/**
	 * Метод удаляет продукт в базе 
	 * @param id id удаляемого продукта в базе
	 * @returns Возвращает объект удаленного продукта из базы
	 */
	async deleteById(id: string): Promise<ProductModel | undefined> {
		return this.productModel.findByIdAndDelete(id).exec();
	}

	/**
	 * Метод обновляет продукт найденный по id, полями из dto
	 * @param id id обновляемого продукта в базе
	 * @param id dto для обновления полей  найденного продукта в базе
	 */
	async updateById(id: string, dto: UpdateProductDto): Promise<ProductModel> {
		return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	/**
	 * Метод находит все продукты по категории с сортировкой и лимитом получения
	 * и вместе с ними (aggregate) присоединяет массив Рейтингов(Reviews)
	 * у которых productId равен _id продукта 
	 * плюс добавлена функция для сортировки Рейтингов в массиве reviews по дате
	 * @param id id удаляемого рейтинга в базе
	 */
	async findWithReviews(dto: FindProductDto) {
		return this.productModel.aggregate([
			{
				$facet: {
					results: [
						{
							$match: { categories: dto.categories }
						},
						{
							$sort: {
								_id: 1
							},
						},
						{
							$skip: dto.skip
						},
						{
							$limit: dto.limit
						},
						{
							$lookup: {
								from: APP_CONSTANTS.COLLECTIONS.REVIEW, // масссив reviews where productId === _id продукта
								localField: '_id', // _id продукта
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
						}],
					count: [{
						$match: { categories: dto.categories }
					},{
						$count: 'count'
					}]
				}
			}
		]).exec();
	}
}
