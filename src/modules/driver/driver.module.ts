import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from './entity/driver.entity';
import { DriverController } from './driver.controller';
import { CreateDriverUsecase } from './usecase/create-driver.usecase';
import { DriverRepository } from './repository/driver.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  controllers: [DriverController],
  providers: [CreateDriverUsecase, DriverRepository],
  exports: [DriverRepository],
})
export class DriverModule {}
