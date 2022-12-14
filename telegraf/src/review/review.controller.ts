import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { REVIEW_NOT_FOUND, REVIEWS_NOT_FOUND } from './review.constant';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	Param,
	Post,
	HttpStatus,
	UsePipes,
	UseGuards
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
// import { UserEmail } from 'src/decorators/user-email.decorator';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';

@Controller('review')
export class ReviewController {

	constructor(private readonly reviewService: ReviewService) { }

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto) {
		this.reviewService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deleteDoc = await this.reviewService.delete(id);
		if (!deleteDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	// @UseGuards(JwtAuthGuard)
	// @Get('byProduct/:productId')
	// async getByProduct(@Param('productId', IdValidationPipe) productId: string, @UserEmail() email: string) {
	//     console.log(email)
	//     return this.reviewService.findByProductId(productId)
	// }

	@UseGuards(JwtAuthGuard)
	@Get('byProduct/:productId')
	async getByProduct(@Param('productId', IdValidationPipe) productId: string) {
		const findReviews = await this.reviewService.findByProductId(productId);
		if(findReviews.length === 0) {
			throw new HttpException(REVIEWS_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return findReviews;
	}

	@UseGuards(JwtAuthGuard)
	@Delete('deleteByProduct/:productId')
	async deleteByProduct(@Param('productId', IdValidationPipe) productId: string) {
		const deletedDocs = await this.reviewService.deleteByProductId(productId);
		const { deletedCount } = deletedDocs;
		if (deletedCount == 0) {
			throw new HttpException(REVIEWS_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}
}
