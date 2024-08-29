import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  instagram: string;
}
