import { Location } from '../entities/location.entity';

export interface ILocationRepository {
  findById(id: string): Promise<Location | null>;
  findByCityAndState(city: string, state: string): Promise<Location | null>;
  save(location: Location): Promise<Location>;
}
