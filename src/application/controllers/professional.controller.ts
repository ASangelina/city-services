import { Controller, Post, Body,  Get, Param, BadRequestException, NotFoundException, HttpStatus, HttpException} from '@nestjs/common';
import { CreateProfessionalDto } from '../dtos/create-professional.dto';
import { ProfessionalService } from '../../domain/services/professional.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Professional } from 'src/domain/entities/professional.entity';

@ApiTags('professionals')
@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Create a new service provider',
    description: 'Creates a new service provider based on the provided information. The provider is added to the system and their information is returned.',
  })
  @ApiBody({
    description: 'Data of the service provider to be created',
    type: CreateProfessionalDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Service provider successfully created.',
    type: CreateProfessionalDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request error. The provided input may be incorrect or incomplete.',
  })
  async createProfessional(
    @Body() createProfessionalDto: CreateProfessionalDto,
  ) {
    try{
    const professional = await this.professionalService.createProfessional(createProfessionalDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Service provider successfully created.',
        data: professional,
      };
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a service provider by ID',
    description: 'Retrieves the details of a service provider based on the provided ID. Returns the provider\'s information if found.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique ID of the service provider',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Service provider details successfully returned.',
    type: Professional, 
  })
  @ApiResponse({
    status: 404,
    description: 'Service provider not found with the provided ID.',
  })
  async getProfessionalById(@Param('id') id: string) {
    try {
      const professional = await this.professionalService.getProfessionalById(id);
      if (!professional) {
        throw new HttpException('Service provider not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Service provider details successfully returned.',
        data: professional,
      };
    } catch (error) {
      throw new NotFoundException({ error: error.message });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all service providers' })
  @ApiResponse({ status: 200, description: 'Gets a list of all registered service providers. Includes information such as name, service type, city, and contact details.' })
  async listProfessionals() {
    try {
      const professionals = await this.professionalService.listProfessionals();
      return {
        statusCode: HttpStatus.OK,
        message: 'All professionals retrieved successfully',
        data: professionals,
      };
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
