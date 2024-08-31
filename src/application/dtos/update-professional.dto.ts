import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateServiceDto } from "./create-service.dto";

export class UpdateProfessionalDto {
  @ApiProperty({
    example: 'Angelina',
    description: 'Name of the service provider',
  })
  @IsString()
  name: string;
}
