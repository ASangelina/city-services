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

    return await this.professionalRepository.save(professional);
  }

  async getProfessionalById(id: string): Promise<Professional> {
    const professional = await this.professionalRepository.findById(id);

    if (!professional) {
      throw new Error('Professional not found');
    }

    return professional;
  }

  async listProfessionals(): Promise<Professional[]> {
    return await this.professionalRepository.findAll();
  }

  async updateProfessional(
    id: string,
    name: string,
  ): Promise<Professional | null> {
    const professional = await this.getProfessionalById(id);

    if (professional) {
      professional.name = name;
      return await this.professionalRepository.save(professional);
    }

    return null;
  }

  async deleteProfessional(id: string): Promise<boolean> {
    const professional = await this.professionalRepository.findById(id);
    const deleteProfessional = await this.professionalRepository.delete(id);
    const deleteContact = await this.contactService.deleteContact(
      professional.contact.id,
    );
    const deleteLocation = await this.locationService.deleteLocation(
      professional.location.id,
    );
    const deleteService = await this.serviceService.deleteService(
      professional.service.id,
    );
    if (
      deleteService &&
      deleteLocation &&
      deleteContact &&
      deleteProfessional
    ) {
      return true;
    }
    return false;
  }

  async findProfessionalByCity(city: string): Promise<Professional[]> {
    return await this.professionalRepository.findProfessionalByCity(city);
  }

  async findProfessionalByCategoryService(
    category: string,
  ): Promise<Professional[]> {
    return await this.professionalRepository.findProfessionalByCategoryService(
      category,
    );
  }
}
