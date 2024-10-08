import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../domain/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCityServices(): string {
    return this.appService.getCityServices();
  }
}
