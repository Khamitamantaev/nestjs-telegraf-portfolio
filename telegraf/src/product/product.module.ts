import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { APP_CONSTANTS } from 'src/configs/constants';
import { ProductModel } from './model/product.model';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [TypegooseModule.forFeature([
	{
		typegooseClass: ProductModel,
		schemaOptions: {
		collection: APP_CONSTANTS.COLLECTIONS.PRODUCT
		}
	}
  ])],
  providers: [ProductService]
})
export class ProductModule {}
