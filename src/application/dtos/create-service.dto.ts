import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({
    description: 'Descrição do serviço oferecido pelo prestador',
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Categoria do serviço oferecido',
    type: String,
  })
  @IsString()
  category: string;
}
