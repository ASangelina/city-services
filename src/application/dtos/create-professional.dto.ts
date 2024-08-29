import { IsString, ValidateNested } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';
import { Type } from 'class-transformer';
import { CreateContactDto } from './create-contact.dto';
import { CreateLocationDto } from './create-location.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionalDto {

  @ApiProperty({example: 'Mary', description: 'Name of the service provider'})
  @IsString()
  name: string;

  @ApiProperty({
    example: {
      description: 'Residential plumbing installation',
      category: 'Plumbing',
    },
    description: 'Details of the service offered by the service provider',
    type: CreateServiceDto,
  })
  @ValidateNested()
  @Type(() => CreateServiceDto)
  service: CreateServiceDto;

  @ApiProperty({
    example: {
      phoneNumber: '+55 11 98765-4321',
      email: 'contact@provider.com',
      instagram: '@provider',
    },
    description: 'Contact details of the service provider',
    type: CreateContactDto,
  })
  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ApiProperty({
    example: {
      city: 'New York',
      state: 'NY',
    },
    description: 'Location where the service provider operates',
    type: CreateLocationDto,
  })
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
