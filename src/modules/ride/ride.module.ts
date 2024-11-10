import { BadRequestException, Module } from '@nestjs/common';
import { RideEntity, Status } from './entity/ride.entity';
import { DriverModule } from '../driver/driver.module';
import { PassengerModule } from '../passenger/passenger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideController } from './ride.controller';
import { CreateRideUsecase } from './usecase/create-ride.usecase';
import { ListByIdRideUseCase } from './usecase/list-by-id-ride.usecase';
import { STATUS_RIDE_STRATEGY } from './constant/constants';
import { RideRepository } from './repository/ride.repository';
import { UpdateStatusRideUseCase } from './usecase/update-status-ride.usecase';
import { AwaitingDriverStatusStrategy } from './strategy/awaiting-driver-status.strategy';
import { InProgressStatusStrategy } from './strategy/in-progress-status.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([RideEntity]),
    DriverModule,
    PassengerModule,
  ],
  controllers: [RideController],
  providers: [
    CreateRideUsecase,
    ListByIdRideUseCase,
    AwaitingDriverStatusStrategy,
    InProgressStatusStrategy,
    {
      provide: STATUS_RIDE_STRATEGY,
      useFactory: (
        awaitingDriverStrategy: AwaitingDriverStatusStrategy,
        inProgressStrategy: InProgressStatusStrategy,
      ) => {
        return (status: Status) => {
          switch (status) {
            case Status.AWAITING_DRIVER:
              return awaitingDriverStrategy;
            case Status.IN_PROGRESS:
              return inProgressStrategy;
            default:
              throw new BadRequestException('Unsupported status');
          }
        };
      },
      inject: [AwaitingDriverStatusStrategy, InProgressStatusStrategy],
    },
    UpdateStatusRideUseCase,
    RideRepository,
  ],
  exports: [],
})
export class RideModule {}
