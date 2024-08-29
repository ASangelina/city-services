import { Service } from '../entities/service.entity';

export interface IServiceRepository {
  findById(id: string): Promise<Service | null>;
  save(service: Service): Promise<Service>;
}
