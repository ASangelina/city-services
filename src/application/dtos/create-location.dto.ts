import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
  @ApiProperty({
    example: 'New York',
    description: 'The name of the city',
    type: String,
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: 'NY',
    description: 'The name or abbreviation of the state',
    type: String,
  })
  @IsString()
  state: string;
}
