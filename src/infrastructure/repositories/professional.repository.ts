import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from 'src/domain/entities/professional.entity';
import { IProfessionalRepository } from 'src/domain/interfaces/professional.interface';

@Injectable()
export class ProfessionalRepository implements IProfessionalRepository {
  constructor(
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
  ) {}

  async findAll(): Promise<Professional[]> {
    return await this.professionalRepository.find({
      relations: ['contact', 'location', 'service'],
    });
  }

  async findById(id: string): Promise<Professional> {
    return this.professionalRepository.findOne({
      where: { id },
      relations: ['contact', 'location', 'service'],
    });
  }

  async save(professional: Professional): Promise<Professional> {
    return await this.professionalRepository.save(professional);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.professionalRepository.delete(id);
    return result.affected > 0;
  }

  async findProfessionalByCity(city: string): Promise<Professional[]> {
    return await this.professionalRepository.find({
      where: { location: { city } },
      relations: ['contact', 'location', 'service'],
    });
  }

  async findProfessionalByCategoryService(
    category: string,
  ): Promise<Professional[]> {
    return await this.professionalRepository.find({
      where: { service: { category: category } },
      relations: ['contact', 'location', 'service'],
    });
  }
}
