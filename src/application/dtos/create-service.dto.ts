import { IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  description: string;

  @IsString()
  category: string;
}
