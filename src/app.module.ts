import { Module } from '@nestjs/common';
import { CoreModule } from './core';
import { DriverModule } from './modules/driver/driver.module';

@Module({
  imports: [CoreModule, DriverModule],
})
export class AppModule {}
