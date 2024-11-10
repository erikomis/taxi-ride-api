import { Body, Controller, Post } from '@nestjs/common';
import { Passenger } from './entity/passenger.entity';
import { PassengerRequestDto } from './dto/passenger-request.dto';
import { CreatePassengerUsecase } from './usecase/CreatePassenger.usecase';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PassengerResponseDto } from './dto/passenger-response.dto';

@ApiTags('passenger')
@Controller({
  path: 'passenger',
  version: '1',
})
export class PassengerController {
  constructor(
    private readonly createPassengerUsecase: CreatePassengerUsecase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Passenger creation' })
  @ApiCreatedResponse({
    description: 'Passenger created successfully',
    type: PassengerResponseDto,
  })
  async createPassenger(@Body() data: PassengerRequestDto): Promise<Passenger> {
    return this.createPassengerUsecase.execute(data);
  }
}
