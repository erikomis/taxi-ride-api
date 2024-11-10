import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRideRequestDto } from './dto/create-ride-request.dto';
import { RideEntity } from './entity/ride.entity';
import { CreateRideUsecase } from './usecase/create-ride.usecase';
import { ListByIdRideUseCase } from './usecase/list-by-id-ride.usecase';
import { UpdateStatusRideRequestDto } from './dto/update-status-ride-request.dto';
import { UpdateRideParamDto } from './dto/update-ride-param.dto';
import { UpdateStatusRideUseCase } from './usecase/update-status-ride.usecase';
import { GetIdRideParamDto } from './dto/get-id-ride-param.dto';

@ApiTags('rides')
@Controller({
  path: 'rides',
  version: '1',
})
export class RideController {
  constructor(
    private readonly creadeRideUsecase: CreateRideUsecase,
    private readonly listByIdRideUsecase: ListByIdRideUseCase,
    private readonly updateStatusRideUsecase: UpdateStatusRideUseCase,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Ride created' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async createRide(@Body() data: CreateRideRequestDto): Promise<RideEntity> {
    return this.creadeRideUsecase.execute(data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Ride UUID', type: String })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getRide(@Param('id') params: GetIdRideParamDto): Promise<RideEntity> {
    return this.listByIdRideUsecase.execute(params.id);
  }

  @Patch('status/:id/:driverId')
  @ApiParam({ name: 'id', description: 'Ride UUID', type: String })
  @ApiParam({
    name: 'driverId',
    description: 'Driver UUID',
    type: String,
  })
  @ApiBody({ type: UpdateStatusRideRequestDto, description: 'Ride status' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async updateRideStatus(
    @Param() params: UpdateRideParamDto,
    @Body() body: UpdateStatusRideRequestDto,
  ) {
    return this.updateStatusRideUsecase.execute(
      params.id,
      params.driverId,
      body,
    );
  }
}
