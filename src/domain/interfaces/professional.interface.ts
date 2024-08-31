import { Professional } from '../entities/professional.entity';

export interface IProfessionalRepository {
  findAll(): Promise<Professional[]>;
  save(professional: Professional): Promise<Professional>;
  findById(id: string): Promise<Professional | null>;
  delete(id: string): Promise<boolean>;
  findProfessionalByCity(city: string): Promise<Professional[]>;
  findProfessionalByCategoryService(category: string): Promise<Professional[]>;
}
