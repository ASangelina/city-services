import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({
    example: 'Residential plumbing installation',
    description: 'A brief description of the service provided',
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'Plumbing',
    description: 'The category of the service',
    type: String,
  })
  @IsString()
  category: string;
}
