import { DriverEntity } from '../../driver/entity/driver.entity';
import { UpdateStatusRideRequestDto } from '../dto/update-status-ride-request.dto';
import { RideEntity } from '../entity/ride.entity';

export interface StatusRideStrategy {
  update(
    findRide: RideEntity,
    existsDriver: DriverEntity,
    updateStatus: UpdateStatusRideRequestDto,
  ): Promise<{ message: string }>;
}
