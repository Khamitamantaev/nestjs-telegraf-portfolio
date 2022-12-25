import { ITelegramStoryModel } from './../model/telegram-story.model';
import { IsArray, IsInt, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateTelegramStoryDto implements ITelegramStoryModel {

    @IsString()
    description: string;

    @IsString()
    story: string;

    @IsNumber()
    @Min(0, { message: 'age must be > 0'})
    @Max(80, {message: 'age must be < 80'})
    age: number;

    @IsArray()
	@IsString({
		each: true
	})
    tags: string[]
}
