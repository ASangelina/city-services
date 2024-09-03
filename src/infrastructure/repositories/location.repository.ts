import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../../domain/entities/location.entity';
import { ILocationRepository } from 'src/domain/interfaces/location.interface';

@Injectable()
export class LocationRepository implements ILocationRepository {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async findById(id: string): Promise<Location> {
    return this.locationRepository.findOne({
      where: { id },
      relations: ['professional'],
    });
  }

  async save(location: Location): Promise<Location> {
    return await this.locationRepository.save(location);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.locationRepository.delete(id);
    return result.affected > 0;
  }
}
