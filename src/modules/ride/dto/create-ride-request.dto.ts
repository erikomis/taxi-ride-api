import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateRideRequestDto {
  @ApiProperty()
  @IsString()
  @Length(3, 255)
  startLocation: string;

  @ApiProperty()
  @IsString()
  @Length(3, 50)
  endLocation: string;

  @ApiProperty()
  @IsDateString()
  startTime: Date;

  @ApiProperty()
  @IsString()
  @IsUUID('7', {
    message: 'Passenger id must be a valid UUID',
  })
  passenger: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  value: number;
}
