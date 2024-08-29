import { IsString, ValidateNested } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';
import { Type } from 'class-transformer';
import { CreateContactDto } from './create-contact.dto';
import { CreateLocationDto } from './create-location.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionalDto {

  @ApiProperty({example: 'Mary', description: 'Nome do prestador de serviços'})
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Detalhes do serviço oferecido pelo prestador de serviços',
    type: CreateServiceDto,
  })
  @ValidateNested()
  @Type(() => CreateServiceDto)
  service: CreateServiceDto;

  @ApiProperty({
    description: 'Detalhes de contato do prestador de serviços',
    type: CreateContactDto,
  })
  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ApiProperty({
    description: 'Localização onde o prestador de serviços opera',
    type: CreateLocationDto,
  })
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
