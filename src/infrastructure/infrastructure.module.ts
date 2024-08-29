import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../domain/entities/contact.entity';
import { Location } from '../domain/entities/location.entity';
import { Professional } from '../domain/entities/professional.entity';
import { Service } from '../domain/entities/service.entity';
import { ProfessionalRepository } from './repositories/professional.repository';
import { ServiceRepository } from './repositories/service.repository';
import { LocationRepository } from './repositories/location.repository';
import { ContactRepository } from './repositories/contact.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Professional, Service, Location, Contact]),
  ],
  providers: [
    ProfessionalRepository,
    { provide: 'IProfessionalRepository', useClass: ProfessionalRepository },
    ServiceRepository,
    { provide: 'IServiceRepository', useClass: ServiceRepository },
    LocationRepository,
    { provide: 'ILocationRepository', useClass: LocationRepository },
    ContactRepository,
    { provide: 'IContactRepository', useClass: ContactRepository },
  ],
  exports: [
    'IProfessionalRepository',
    'IServiceRepository',
    'ILocationRepository',
    'IContactRepository',
  ],
})
export class InfrastructureModule {}
