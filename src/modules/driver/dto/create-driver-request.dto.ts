import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateDriverDtoRequest {
  @IsString()
  @Length(3, 50)
  @ApiProperty({
    description: 'Driver name',
    example: 'John Doe',
  })
  name: string;

  @IsString()
  @Length(3, 255)
  @ApiProperty({
    description: 'Driver car',
    example: 'Toyota Avanza',
  })
  car: string;

  @IsString()
  @Length(10, 11)
  @ApiProperty({
    description: 'Driver phone number',
    example: '08123456789',
  })
  phone: string;
}
