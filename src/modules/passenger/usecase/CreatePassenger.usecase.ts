import { Injectable } from '@nestjs/common';
import { PassengerRequestDto } from '../dto/passenger-request.dto';
import { Passenger } from '../entity/passenger.entity';
import { PassengerRepository } from '../repository/passenger.repository';

@Injectable()
export class CreatePassengerUsecase {
  constructor(private readonly passengerRepository: PassengerRepository) {}

  async execute(data: PassengerRequestDto): Promise<Passenger> {
    const passenger = this.passengerRepository.create(data);
    return passenger;
  }
}
