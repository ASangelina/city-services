import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  BadRequestException,
  NotFoundException,
  HttpStatus,
  HttpException,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProfessionalDto } from '../dtos/create-professional.dto';
import { ProfessionalService } from '../../domain/services/professional.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Professional } from 'src/domain/entities/professional.entity';
import { UpdateProfessionalDto } from '../dtos/update-professional';

@ApiTags('professionals')
@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Create a new service provider',
    description:
      'Creates a new service provider based on the provided information. The provider is added to the system and their information is returned.',
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
    description:
      'Invalid request error. The provided input may be incorrect or incomplete.',
  })
  async createProfessional(
    @Body() createProfessionalDto: CreateProfessionalDto,
  ) {
    try {
      const professional = await this.professionalService.createProfessional(
        createProfessionalDto,
      );
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
    description:
      "Retrieves the details of a service provider based on the provided ID. Returns the provider's information if found.",
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
      const professional =
        await this.professionalService.getProfessionalById(id);
      if (!professional) {
        throw new HttpException(
          'Service provider not found',
          HttpStatus.NOT_FOUND,
        );
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
  @ApiResponse({
    status: 200,
    description:
      'Gets a list of all registered service providers. Includes information such as name, service type, city, and contact details.',
  })
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

  @Put(':id')
  @ApiOperation({ summary: 'Update a service provider' })
  @ApiResponse({
    status: 200,
    description: 'Updates the details of a specific service provider by ID.',
  })
  updateProfessional(
    @Param('id') id: string,
    @Body() updateProfessionalDto: UpdateProfessionalDto,
  ) {
    try {
      return this.professionalService.updateProfessional(
        id,
        updateProfessionalDto.name,
      );
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a service provider' })
  @ApiResponse({
    status: 200,
    description: 'Deletes a specific service provider by ID.',
  })
  async deleteProfessional(@Param('id') id: string) {
    try {
      return await this.professionalService.deleteProfessional(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get('city/:city')
  @ApiOperation({ summary: 'Find professionals by city' })
  @ApiParam({
    name: 'city',
    description: 'Name of the city to filter professionals',
    example: 'New York',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of professionals based on the specified city.',
  })
  async findProfessionalByCity(
    @Param('city') city: string,
  ): Promise<Professional[]> {
    try {
      return await this.professionalService.findProfessionalByCity(city);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get('service/category/:category')
  @ApiOperation({ summary: 'Find professionals by category service' })
  @ApiParam({
    name: 'category',
    description: 'category of the service to filter professionals',
    example: 'Plumbing',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns a list of professionals based on the specified category service.',
  })
  async findProfessionalByCategoryService(
    @Param('category') category: string,
  ): Promise<Professional[]> {
    try {
      return await this.professionalService.findProfessionalByCategoryService(
        category,
      );
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
