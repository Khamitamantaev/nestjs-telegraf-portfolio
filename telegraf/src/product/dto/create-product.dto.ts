import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateProductDto {

	@IsString()
	selectedFile: string;

	@IsString()
	title: string;

	@IsNumber()
	price: number;

	@IsString()
	description: string;
   
	@IsArray()
	@IsString({
		each: true
	})
	categories: string[];
}