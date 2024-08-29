import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';
import { Service } from './entities/service.entity';
import { Contact } from './entities/contact.entity';
import { ProfessionalService } from './services/professional.service';
import { Location } from './entities/location.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { ContactService } from './services/contact.service';
import { LocationService } from './services/location.service';
import { ServiceService } from './services/service.service';

@Module({
  imports: [
    InfrastructureModule,
    TypeOrmModule.forFeature([Professional, Service, Location, Contact]),
  ],
  providers: [
    ProfessionalService,
    ContactService,
    LocationService,
    ServiceService,
  ],
  exports: [
    ProfessionalService,
    ContactService,
    LocationService,
    ServiceService,
  ],
})
export class DomainModule {}
