import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
  providers: [ConfigService]
})
export class TopPageModule {}
