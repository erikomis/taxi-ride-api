import { BadRequestException, Injectable } from '@nestjs/common';
import { DriverEntity } from '../../driver/entity/driver.entity';
import { RideEntity, Status } from '../entity/ride.entity';
import { StatusRideStrategy } from './status-ride-strategy.interface';
import { RideRepository } from '../repository/ride.repository';
import { UpdateStatusRideRequestDto } from '../dto/update-status-ride-request.dto';

@Injectable()
export class AwaitingDriverStatusStrategy implements StatusRideStrategy {
  constructor(private readonly rideRepository: RideRepository) {}
  async update(
    findRide: RideEntity,
    existsDriver: DriverEntity,
    updateStatus: UpdateStatusRideRequestDto,
  ) {
    if (findRide.status === Status.AWAITING_DRIVER) {
      if (updateStatus.status !== Status.IN_PROGRESS) {
        throw new BadRequestException(
          'Only the IN_PROGRESS status is allowed.',
        );
      }

      await this.rideRepository.update({
        ...existsDriver,
        ...findRide,
        status: updateStatus.status,
      });

      return { message: 'The ride is now in progress.' };
    }

    if (findRide.status === Status.IN_PROGRESS) {
      return { message: 'The ride is already in progress.' };
    }

    throw new BadRequestException('Invalid status for update.');
  }
}
