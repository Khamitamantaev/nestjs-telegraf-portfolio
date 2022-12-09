import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { APP_CONSTANTS } from 'src/configs/constants';
import { ProductModel } from './model/product.model';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  imports: [TypegooseModule.forFeature([
    {
      typegooseClass: ProductModel,
      schemaOptions: {
        collection: APP_CONSTANTS.COLLECTIONS.PRODUCT
      }
    }
  ])]
})
export class ProductModule {}
