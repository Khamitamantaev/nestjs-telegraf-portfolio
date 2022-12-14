import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { PRODUCT_NOT_FOUND } from './product.constants';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { 
	Body, 
	Controller, 
	Post, 
	Get, 
	Patch, 
	Delete, 
	Param, 
	HttpCode, 
	NotFoundException, 
	UsePipes, 
	ValidationPipe, 
	UseGuards 
} from '@nestjs/common';
import { ProductModel } from './model/product.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('product')
export class ProductController {
	constructor(
		private readonly productService: ProductService
	) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto:CreateProductDto) { 
		return this.productService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const product = await this.productService.findById(id);
		if(!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}
		return product;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedProduct = await this.productService.deleteById(id);
		if(!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}

	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: ProductModel) {
		const updatedProduct = await this.productService.updateById(id, dto);
		if(!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}
		return updatedProduct;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		return this.productService.findWithReviews(dto);
	}
}
