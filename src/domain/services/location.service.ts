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
    const locationExists = await this.locationRepository.findByCityAndState(
      location.city,
      location.state,
    );

    if (locationExists) {
      return locationExists;
    }

    const newLocation = new Location();
    newLocation.city = location.city;
    newLocation.state = location.state;

    return await this.locationRepository.save(newLocation);
  }
}
