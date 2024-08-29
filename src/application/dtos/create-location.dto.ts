import { IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  city: string;

  @IsString()
  state: string;
}
