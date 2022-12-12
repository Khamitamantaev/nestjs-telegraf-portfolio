import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { REVIEW_NOT_FOUND } from './review.constant';
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
import { UserEmail } from 'src/decorators/user-email.decorator';

@Controller('review')
export class ReviewController {

    constructor(private readonly reviewService: ReviewService) { }

    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto: CreateReviewDto) {
        this.reviewService.create(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const deleteDoc = await this.reviewService.delete(id)
        if (!deleteDoc) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string, @UserEmail() email: string) {
        console.log(email)
        return this.reviewService.findByProductId(productId)
    }
}
