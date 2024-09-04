import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../../domain/entities/service.entity';
import { IServiceRepository } from 'src/domain/interfaces/service.interface';

@Injectable()
export class ServiceRepository implements IServiceRepository {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async findById(id: string): Promise<Service> {
    return this.serviceRepository.findOne({
      where: { id },
    });
  }

  async save(service: Service): Promise<Service> {
    return await this.serviceRepository.save(service);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.serviceRepository.delete(id);
    return result.affected > 0;
  }
}
