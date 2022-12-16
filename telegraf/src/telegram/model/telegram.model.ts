import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export interface TelegramStoryModel extends Base {}
export class TelegramStoryModel extends TimeStamps {

	@prop()
	description: string; // описание истории

    @prop()
	story: string; 

	@prop({
		type: () => [String]
	})
	tags: string[]; // теги с помощью которых можно найти историю
}