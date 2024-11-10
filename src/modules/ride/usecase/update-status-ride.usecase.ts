import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RideRepository } from '../repository/ride.repository';
import { DriverRepository } from '../../driver/repository/driver.repository';
import { UpdateStatusRideRequestDto } from '../dto/update-status-ride-request.dto';
import { STATUS_RIDE_STRATEGY } from '../constant/constants';
import { Status } from '../entity/ride.entity';
import { StatusRideStrategy } from '../strategy/status-ride-strategy.interface';

@Injectable()
export class UpdateStatusRideUseCase {
  constructor(
    private readonly rideRepository: RideRepository,
    private readonly driverRepository: DriverRepository,
    @Inject(STATUS_RIDE_STRATEGY)
    private readonly getStrategy: (status: Status) => StatusRideStrategy,
  ) {}

  async execute(
    id: string,
    driverId: string,
    updateStatus: UpdateStatusRideRequestDto,
  ) {
    const findRide = await this.rideRepository.findOne(id);
    const existsDriver = await this.driverRepository.findOne(driverId);

    if (!findRide) {
      throw new NotFoundException('Ride not found');
    }

    if (!existsDriver) {
      throw new NotFoundException('Driver not found');
    }

    const strategy = this.getStrategy(findRide.status);

    return strategy.update(findRide, existsDriver, updateStatus);
  }
}
