import { IsEnum } from 'class-validator';
import { Status } from '../entity/ride.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusRideRequestDto {
  @IsEnum(Status, {
    message: 'status must be a valid Status',
  })
  @ApiProperty({
    enum: Status,
    example: Status.AWAITING_DRIVER,
  })
  status: Status;
}
