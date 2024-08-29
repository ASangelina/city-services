import { Module } from '@nestjs/common';
import { ProfessionalController } from './controllers/professional.controller';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [ProfessionalController],
  providers: [],
})
export class ApplicationModule {}
