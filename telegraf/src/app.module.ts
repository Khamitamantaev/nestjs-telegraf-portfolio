import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose';
import { GetMongoConfiguration } from './configs/mongo.config';
import { FilesModule } from './files/files.module';
import { TelegramModule } from './telegram/telegram.module';
import config from './configs/configuration'
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
  	ConfigModule.forRoot({
  		load: [config]
	}),
	TypegooseModule.forRootAsync({
  		imports: [ConfigModule],
  		inject: [ConfigService],
  		useFactory: GetMongoConfiguration
	}),
	CacheModule.register({
		isGlobal: true,
		store: redisStore,
		host: process.env.REDIS_HOST,
      	port: process.env.REDIS_PORT,
	}),
	AuthModule,
	ReviewModule,
	ProductModule,
	TopPageModule,
	FilesModule,
	TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
