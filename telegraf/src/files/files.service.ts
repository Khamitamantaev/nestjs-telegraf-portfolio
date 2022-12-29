import { MFile } from './mfile.class';
import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.response';
import { format } from 'date-fns';
import {path} from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
@Injectable()
export class FilesService {

	async saveFiles(file: MFile): Promise<FileElementResponse> {
		const dateFolder = format(new Date(), 'yyyy-MM-dd');
		const uploadFolder = `${path}/uploads/${dateFolder}`;
		// Обеспечить наличие директории, если не будет, то создаст
		await ensureDir(uploadFolder);
		const res: FileElementResponse = {  
            url: `${dateFolder}/${file.originalname}`,
            name: file.originalname};
        await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
        return res;
	} 
}
