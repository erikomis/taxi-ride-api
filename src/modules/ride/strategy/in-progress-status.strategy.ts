import { BadRequestException, Injectable } from '@nestjs/common';
import { RideEntity, Status } from '../entity/ride.entity';
import { DriverEntity } from '../../driver/entity/driver.entity';
import { UpdateStatusRideRequestDto } from '../dto/update-status-ride-request.dto';
import { RideRepository } from '../repository/ride.repository';
import { StatusRideStrategy } from './status-ride-strategy.interface';

@Injectable()
export class InProgressStatusStrategy implements StatusRideStrategy {
  constructor(private readonly rideRepository: RideRepository) {}
  async update(
    findRide: RideEntity,
    _: DriverEntity,
    updateStatus: UpdateStatusRideRequestDto,
  ) {
    if (
      findRide.status === Status.AWAITING_DRIVER &&
      updateStatus.status === Status.AWAITING_DRIVER
    ) {
      return {
        message: 'The ride is already in progress. No changes were made.',
      };
    }

    if (findRide.status !== Status.AWAITING_DRIVER) {
      throw new BadRequestException('Status does not match IN_PROGRESS');
    }

    await this.rideRepository.update({
      ...findRide,
      status: updateStatus.status,
      endTime: new Date(),
    });

    return { message: 'Ride successfully completed.' };
  }
}
