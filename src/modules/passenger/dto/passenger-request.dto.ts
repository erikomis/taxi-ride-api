import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class PassengerRequestDto {
  @IsString()
  @Length(3, 50)
  @ApiProperty({
    description: 'Passenger name',
    example: 'John Doe',
  })
  name: string;

  @IsString()
  @Length(10, 11)
  @ApiProperty({
    description: 'Passenger phone number',
    example: '08123456789',
  })
  phone: string;
}
