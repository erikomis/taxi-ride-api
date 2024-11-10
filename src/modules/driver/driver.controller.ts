import { Body, Controller, Post } from '@nestjs/common';
import { CreateDriverDtoRequest } from './dto/create-driver-request.dto';
import { CreateDriverUsecase } from './usecase/create-driver.usecase';
import { DriverEntity } from './entity/driver.entity';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DriverResponseDto } from './dto/driver-response.dto';

@ApiTags('driver')
@Controller({
  path: 'driver',
  version: '1',
})
export class DriverController {
  constructor(private readonly createDriverUsecase: CreateDriverUsecase) {}

  @Post()
  @ApiOperation({ summary: 'Driver creation' })
  @ApiCreatedResponse({
    description: 'Driver created successfully',
    type: DriverResponseDto,
  })
  async createDriver(
    @Body() body: CreateDriverDtoRequest,
  ): Promise<DriverEntity> {
    const driver = await this.createDriverUsecase.execute(body);
    return driver;
  }
}
