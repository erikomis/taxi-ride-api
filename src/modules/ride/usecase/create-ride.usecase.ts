import { Injectable, NotFoundException } from '@nestjs/common';
import { PassengerRepository } from '../../passenger/repository/passenger.repository';
import { CreateRideRequestDto } from '../dto/create-ride-request.dto';
import { RideEntity } from '../entity/ride.entity';
import { RideRepository } from '../repository/ride.repository';

@Injectable()
export class CreateRideUsecase {
  constructor(
    private readonly rideRepository: RideRepository,
    private readonly passengerRepository: PassengerRepository,
  ) {}
  async execute(data: CreateRideRequestDto): Promise<RideEntity> {
    const passenger = await this.passengerRepository.findOne(data.passenger);

    if (!passenger) {
      throw new NotFoundException('Passenger not found');
    }

    return this.rideRepository.create({
      ...data,
      passenger,
    });
  }
}
