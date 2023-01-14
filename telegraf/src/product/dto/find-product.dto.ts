import { IsNumber, IsOptional, IsString, IsArray } from 'class-validator';

export class FindProductDto {

	@IsArray()
	@IsString({
		each: true
	})
	categories: string[];

	@IsNumber()
	limit: number;

	@IsOptional()
	@IsNumber()
	skip: number;
}