import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getCats() {
    return 'all cats here!'
  }
}
