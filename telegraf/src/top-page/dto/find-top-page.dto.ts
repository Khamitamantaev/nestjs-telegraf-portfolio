import { IsEnum } from 'class-validator';
import { TopLevelCategory } from './../model/top-page.model';
export class FindTopPageDto {
	
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;
}