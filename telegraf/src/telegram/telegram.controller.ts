import { CreateTelegramStoryDto } from './dto/create-telegram-story.dto';
import { UpdateTelegramStoryDto } from './dto/update-telegram-story.dto';
import { TELEGRAM_STORY_NOT_FOUND } from './telegram.constants';
import { FindTelegramStoryDto } from './dto/find-telegram-story.dto';
import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch,
  Param,
  Delete, 
  UseGuards, 
  NotFoundException, 
  HttpCode, 
  ValidationPipe, 
  UsePipes 
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto:CreateTelegramStoryDto) { 
		return this.telegramService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const story = await this.telegramService.findById(id);
		if(!story) {
			throw new NotFoundException(TELEGRAM_STORY_NOT_FOUND);
		}
		return story;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedStory = await this.telegramService.deleteById(id);
		if(!deletedStory) {
			throw new NotFoundException(TELEGRAM_STORY_NOT_FOUND);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: UpdateTelegramStoryDto) {
		const updatedStory = await this.telegramService.updateById(id, dto);
		if(!updatedStory) {
			throw new NotFoundException(TELEGRAM_STORY_NOT_FOUND);
		}
		return updatedStory;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('findGte')
	async findGte(@Body() dto: FindTelegramStoryDto) {
		return this.telegramService.findGte18Story(dto);
	}

  @UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('findLess')
	async findLess(@Body() dto: FindTelegramStoryDto) {
		return this.telegramService.findLess18Story(dto);
	}
}
