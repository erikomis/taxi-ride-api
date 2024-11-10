import { IsUUID } from 'class-validator';

export class GetIdRideParamDto {
  @IsUUID('7', {
    message: 'id must be a valid UUID',
  })
  id: string;
}
