import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {

	@prop()
	image: string;

	@prop()
	title: string;

	@prop()
	price: number;

	@prop()
	description: string;

	@prop()
	category: string;
}
