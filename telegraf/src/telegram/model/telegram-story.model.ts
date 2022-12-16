import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export interface ITelegramStoryModel {
	description: string;
	story: string; 
	age: number; 
	tags: string[];
}

export interface TelegramStoryModel extends Base {}
export class TelegramStoryModel extends TimeStamps implements ITelegramStoryModel {

	@prop()
	description: string; 

    @prop()
	story: string; 

	@prop()
	age: number; // со скольки лет можно читать шутку

	@prop({
		type: () => [String]
	})
	tags: string[]; // теги с помощью которых можно найти историю
}