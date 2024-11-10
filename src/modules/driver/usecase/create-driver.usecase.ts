import { Injectable } from '@nestjs/common';
import { CreateDriverDtoRequest } from '../dto';
import { DriverEntity } from '../entity/driver.entity';
import { DriverRepository } from '../repository/driver.repository';

@Injectable()
export class CreateDriverUsecase {
  constructor(private readonly driverRepository: DriverRepository) {}

  async execute(dto: CreateDriverDtoRequest): Promise<DriverEntity> {
    const driver = this.driverRepository.create(dto);
    return driver;
  }
}
