import { Module } from '@nestjs/common';
import { CoreModule } from './core';
import { DriverModule } from './modules/driver/driver.module';
import { PassengerModule } from './modules/passenger/passenger.module';

@Module({
  imports: [CoreModule, DriverModule, PassengerModule],
})
export class AppModule {}
