import { ApiProperty } from '@nestjs/swagger';

export class PassengerResponseDto {
  @ApiProperty({
    description: 'Passenger id',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    description: 'Passenger name',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Passenger phone number',
    type: 'string',
  })
  phone: string;

  @ApiProperty({
    description: 'Passenger created at',
    type: 'string',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Passenger updated at',
    type: 'string',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Passenger deleted at',
    type: 'string',
  })
  deletedAt: Date;
}
