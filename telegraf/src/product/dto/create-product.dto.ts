import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {

	@IsString()
	selectedFile: string;

	@IsString()
	title: string;

	@IsNumber()
	price: number;

	@IsString()
	description: string;
   
	@IsString()
	category: string;
}