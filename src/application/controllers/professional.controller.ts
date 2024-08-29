import { Controller, Post, Body,  Get, Param, BadRequestException, NotFoundException} from '@nestjs/common';
import { CreateProfessionalDto } from '../dtos/create-professional.dto';
import { ProfessionalService } from '../../domain/services/professional.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Professional } from 'src/domain/entities/professional.entity';

@ApiTags('professionals')
@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um novo prestador de serviços',
    description: 'Cria um novo prestador de serviços com base nas informações fornecidas. O prestador é adicionado ao sistema e suas informações são retornadas.',
  })
  @ApiBody({
    description: 'Dados do prestador de serviços a ser criado',
    type: CreateProfessionalDto, // Substitua por seu DTO apropriado
  })
  @ApiResponse({
    status: 201,
    description: 'Prestador de serviços criado com sucesso.',
    type: CreateProfessionalDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de solicitação inválida. A entrada fornecida pode estar incorreta ou incompleta.',
  })
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
  @ApiOperation({
    summary: 'Obter um prestador de serviços por ID',
    description: 'Recupera os detalhes de um prestador de serviços com base no ID fornecido. Retorna as informações do prestador se encontrado.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID único do prestador de serviços',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Detalhes do prestador de serviços retornados com sucesso.',
    type: Professional, 
  })
  @ApiResponse({
    status: 404,
    description: 'Prestador de serviços não encontrado com o ID fornecido.',
  })
  getProfessionalById(@Param('id') id: string) {
    try {
      return this.professionalService.getProfessionalById(id);
    } catch (error) {
      throw new NotFoundException({ error: error.message });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os prestadores de serviços' })
  @ApiResponse({ status: 200, description: 'Obtém uma lista de todos os prestadores de serviços cadastrados. Inclui informações como nome, tipo de serviço, cidade e contato.' })
  async listProfessionals() {
    return await this.professionalService.listProfessionals();
  }
}
