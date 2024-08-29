import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
  @ApiProperty({
    example: '+55 11 98765-4321',
    description: 'The phone number of the contact',
    type: String,
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    example: 'contact@provider.com',
    description: 'The email address of the contact',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '@provider',
    description: 'The Instagram handle of the contact',
    type: String,
  })
  @IsString()
  instagram: string;
}
