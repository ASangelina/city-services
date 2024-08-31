import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateProfessionalDto {
  @ApiProperty({
    example: 'Angelina',
    description: 'Name of the service provider',
  })
  @IsString()
  name: string;
}
