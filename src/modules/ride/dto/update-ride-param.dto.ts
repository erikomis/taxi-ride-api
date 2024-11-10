import { IsUUID } from 'class-validator';

export class UpdateRideParamDto {
  @IsUUID('7', {
    message: 'id must be a valid UUID',
  })
  id: string;

  @IsUUID('7', {
    message: 'driverId must be a valid UUID',
  })
  driverId: string;
}
