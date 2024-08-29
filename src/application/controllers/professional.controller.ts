import { Controller, Post, Body,  Get, Param, BadRequestException, NotFoundException} from '@nestjs/common';
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

  @Get(':id')
  getUserById(@Param('id') id: string) {
    try {
      return this.professionalService.getProfessionalById(id);
    } catch (error) {
      throw new NotFoundException({ error: error.message });
    }
  }
}
