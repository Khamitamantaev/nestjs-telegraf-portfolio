import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { path } from 'app-root-path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: `${path}/uploads`,
    serveRoot: '/static' // префикс для папки в запросе http://localhost:3000/static/2022-12-15/IMG_20200817_152132.jpg
  })],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
