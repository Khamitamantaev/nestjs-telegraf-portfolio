import { IsString } from 'class-validator';

export class FindTelegramStoryDto {

	@IsString()
	tag: string;
}