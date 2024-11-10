import { NotFoundException } from '@nestjs/common';
import { RideEntity } from '../entity/ride.entity';
import { RideRepository } from '../repository/ride.repository';

export class ListByIdRideUseCase {
  constructor(private readonly rideRepository: RideRepository) {}

  async execute(id: string): Promise<RideEntity> {
    const ride = await this.rideRepository.findOne(id);

    if (!ride) {
      throw new NotFoundException('Ride not found');
    }

    return ride;
  }
}
