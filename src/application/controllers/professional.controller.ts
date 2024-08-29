import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CreateProfessionalDto } from '../dtos/create-professional.dto';
import { ProfessionalService } from '../../domain/services/professional.service';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
  async createProfessional(
    @Body() createProfessionalDto: CreateProfessionalDto,
  ) {
    try {
      return await this.professionalService.createProfessional(
        createProfessionalDto,
      );
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
