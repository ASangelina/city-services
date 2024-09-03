import { Inject, Injectable } from '@nestjs/common';
import { CreateLocationDto } from 'src/application/dtos/create-location.dto';
import { ILocationRepository } from '../interfaces/location.interface';
import { Location } from '../entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @Inject('ILocationRepository')
    private readonly locationRepository: ILocationRepository,
  ) {}

  async createLocation(location: CreateLocationDto): Promise<Location> {
    const newLocation = new Location();
    newLocation.city = location.city;
    newLocation.state = location.state;

    return await this.locationRepository.save(newLocation);
  }

  async deleteLocation(id: string) {
    const location = await this.locationRepository.findById(id);
    if (!location) {
      throw new Error('Location not found');
    }
    return await this.locationRepository.delete(id);
  }
}
