import { ApiProperty } from '@nestjs/swagger';

export class DriverResponseDto {
  @ApiProperty({
    description: 'Driver id',
    type: 'string',
  })
  id: string;

  @ApiProperty({ description: 'Driver name', type: 'string' })
  name: string;
  @ApiProperty({ description: 'Driver phone number', type: 'string' })
  phone: string;

  @ApiProperty({ description: 'Driver created at', type: 'string' })
  createdAt: Date;

  @ApiProperty({ description: 'Driver updated at', type: 'string' })
  updatedAt: Date;

  @ApiProperty({ description: 'Driver deleted at', type: 'string' })
  deletedAt: Date;
}
