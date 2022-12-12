import { TopLevelCategory } from './../model/top-page.model';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator'
import { Type } from 'class-transformer';

class HHDataDto {

    @IsNumber()
    count: number;

    @IsNumber()
    juniorSalary: number;

    @IsNumber()
    middleSalary: number;

    @IsNumber()
    seniorSalary: number;
}

class TopPageAdvantageDto {

    @IsString()
    title: string;

    @IsString()
    description: string;
}


export class CreateTopPageDto {

    @IsEnum(TopLevelCategory)
    firstCategory: TopLevelCategory;

    @IsString()
    secondCategory: string;

    @IsString()
    alias: string;

    @IsString()
    title: string;

    @IsString()
    category: string 

    @ValidateNested()
    @Type(() => HHDataDto)
    @IsOptional()
    hh?: HHDataDto

    @IsArray()
    @ValidateNested()
    @Type(() => TopPageAdvantageDto)
    advantages: TopPageAdvantageDto[]

    @IsString()
    seoText: string;

    @IsString()
    tagsTitle: string; 

    @IsArray()
    @IsString({
        each: true
    })
    tags: string[]
}