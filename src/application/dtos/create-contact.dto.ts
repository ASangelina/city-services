import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Número de telefone do prestador',
    type: String,
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: 'Endereço de e-mail do prestador',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Perfil do Instagram do prestador',
    type: String,
  })
  @IsString()
  instagram: string;
}
