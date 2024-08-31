import { Module } from '@nestjs/common';
import { ProfessionalController } from './controllers/professional.controller';
import { DomainModule } from 'src/domain/domain.module';
import { AppController } from "./controllers/app.controller";

@Module({
  imports: [DomainModule],
  controllers: [ProfessionalController, AppController],
  providers: [],
})
export class ApplicationModule {}
