import { TopPageModel } from './model/top-page.model';
import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { APP_CONSTANTS } from 'src/configs/constants';
import { TopPageService } from './top-page.service';

@Module({
  controllers: [TopPageController],
  providers: [ConfigService, TopPageService],
  imports: [TypegooseModule.forFeature([
	{
		typegooseClass: TopPageModel,
		schemaOptions: {
		collection: APP_CONSTANTS.COLLECTIONS.TOP_PAGE
		}
	}
  ])]
})
export class TopPageModule {}
