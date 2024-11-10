import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './entity/passenger.entity';
import { PassengerRepository } from './repository/passenger.repository';
import { CreatePassengerUsecase } from './usecase/CreatePassenger.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengerController],
  providers: [CreatePassengerUsecase, PassengerRepository],
  exports: [PassengerRepository],
})
export class PassengerModule {}
