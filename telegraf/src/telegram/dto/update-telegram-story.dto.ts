import { PartialType } from '@nestjs/mapped-types';
import { CreateTelegramStoryDto } from './create-telegram-story.dto';

export class UpdateTelegramStoryDto extends PartialType(CreateTelegramStoryDto) {}
