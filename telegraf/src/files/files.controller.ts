import { MFile } from './mfile.class';
import { FilesService } from './files.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Controller, HttpCode, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from './dto/file-element.response';

@Controller('files')
export class FilesController {

        constructor(private readonly fileService: FilesService) {}

		@Post('upload')
		@HttpCode(200)
		@UseGuards(JwtAuthGuard)
		@UseInterceptors(FileInterceptor('files'))
		async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
            const saveArray: MFile[] = [new MFile(file)];
            if(file.mimetype.includes('image')) {
                const buffer = await this.fileService.convertToWebP(file.buffer);
                saveArray.push(new MFile({
                    originalname: `${file.originalname.split('.')[0]}.webp`,
                    buffer
                }));
                
            }
			return this.fileService.saveFiles(saveArray);
		}
}
