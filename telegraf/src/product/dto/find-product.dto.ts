import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FindProductDto {

	@IsString()
	category: string;

	@IsNumber()
	limit: number;

	@IsOptional()
	@IsNumber()
	skip: number;
}