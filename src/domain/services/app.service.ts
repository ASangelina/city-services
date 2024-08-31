import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCityServices(): string {
    return 'City Services API by Angelina Siqueira & Daniele Motta';
  }
}
