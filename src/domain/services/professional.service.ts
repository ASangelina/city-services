import { Injectable, Inject } from '@nestjs/common';
import { Professional } from '../entities/professional.entity';
import { IProfessionalRepository } from '../interfaces/professional.interface';
import { CreateProfessionalDto } from 'src/application/dtos/create-professional.dto';
import { ContactService } from './contact.service';
import { LocationService } from './location.service';
import { ServiceService } from './service.service';

@Injectable()
export class ProfessionalService {
  constructor(
    @Inject('IProfessionalRepository')
    private readonly professionalRepository: IProfessionalRepository,

    private readonly contactService: ContactService,
    private readonly locationService: LocationService,
    private readonly serviceService: ServiceService,
  ) {}

  async createProfessional(
    createProfessionalDto: CreateProfessionalDto,
  ): Promise<Professional> {
    const { name, contact, location, service } = createProfessionalDto;

    const saveContact = await this.contactService.createContact(contact);
    const saveLocation = await this.locationService.createLocation(location);
    const saveService = await this.serviceService.createService(service);

    const professional = new Professional();
    professional.name = name;
    professional.contact = saveContact;
    professional.location = saveLocation;
    professional.service = saveService;

    return this.professionalRepository.save(professional);
  }
}
