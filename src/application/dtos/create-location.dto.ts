import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty({
    description: 'Cidade onde o prestador de serviços opera',
    type: String,
  })
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Estado onde o prestador de serviços opera',
    type: String,
  })
  @IsString()
  state: string;
}
