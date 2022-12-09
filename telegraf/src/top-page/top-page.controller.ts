import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './model/top-page.model';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
    constructor(private readonly configService: ConfigService) {}

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {
        console.log(this.configService.get('TEST'))
    }

    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {

    }
}
