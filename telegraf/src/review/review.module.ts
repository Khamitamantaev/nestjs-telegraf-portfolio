import { ReviewModel } from './model/review.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewController } from './review.controller';
import { APP_CONSTANTS } from 'src/configs/constants';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  imports: [TypegooseModule.forFeature([
	{
		typegooseClass: ReviewModel,
		schemaOptions: {
		collection: APP_CONSTANTS.COLLECTIONS.REVIEW
		}
	}
  ])],
  providers: [ReviewService]
})
export class ReviewModule {}
