import { Inject, Injectable } from '@nestjs/common';
import { IServiceRepository } from '../interfaces/service.interface';
import { CreateServiceDto } from 'src/application/dtos/create-service.dto';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @Inject('IServiceRepository')
    private readonly serviceRepository: IServiceRepository,
  ) {}

  async createService(service: CreateServiceDto): Promise<Service> {
    const newService = new Service();
    newService.description = service.description;
    newService.category = service.category;

    return await this.serviceRepository.save(newService);
  }

  async deleteService(id: string) {
    return await this.serviceRepository.delete(id)
  }
}
