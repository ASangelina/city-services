import { IsString, ValidateNested } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';
import { Type } from 'class-transformer';
import { CreateContactDto } from './create-contact.dto';
import { CreateLocationDto } from './create-location.dto';

export class CreateProfessionalDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateServiceDto)
  service: CreateServiceDto;

  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
