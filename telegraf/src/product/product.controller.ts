import { FindProductDto } from './dto/find-product.dto';
import { Body, Controller, Post, Get, Patch, Delete, Param, HttpCode } from '@nestjs/common';
import { ProductModel } from './model/product.model';

@Controller('product')
export class ProductController {

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) { 

    }

    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ProductModel) {
        
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {

    }
}
