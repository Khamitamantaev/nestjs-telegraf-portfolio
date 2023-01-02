import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export enum TopLevelCategory {
	Cources = 'Cources',
	Services = 'Services',
	Books = 'Books',
	Products = 'Products'
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {

	@prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop({ unique: true }) // Уникальный url по которому будет открываться страница
	alias: string;

	@prop()
	title: string;

	@prop()
	category: string; // страница должна иметь категорию, по которой будут подтягиваться продукты

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string; // переменный заголовок, будет меняться в зависимости от продукта

	@prop({
		type: () => [String]
	})
	tags: string[];
}
