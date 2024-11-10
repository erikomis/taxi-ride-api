import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityAbstract } from '../../../common/abstracts';
import { DriverEntity } from '../../driver/entity/driver.entity';
import { Passenger } from '../../passenger/entity/passenger.entity';

export enum Status {
  AWAITING_DRIVER = 'awaiting Driver',
  IN_PROGRESS = 'in Progress',
  COMPLETED = 'completed',
}

@Entity({
  name: 'rides',
})
export class RideEntity extends EntityAbstract {
  @Column({
    name: 'start_location',
  })
  startLocation: string;

  @Column({
    name: 'end_location',
  })
  endLocation: string;

  @Column({
    type: 'timestamp',
    name: 'start_time',
  })
  startTime: Date;

  @Column({
    type: 'timestamp',
    name: 'end_time',
    nullable: true,
  })
  endTime: Date;

  @ManyToOne(() => DriverEntity)
  @JoinColumn({
    name: 'driver_id',
  })
  driver: DriverEntity;

  @ManyToOne(() => Passenger)
  @JoinColumn({
    name: 'passenger_id',
  })
  passenger: Passenger;
  @Column()
  valor: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.AWAITING_DRIVER,
  })
  status: Status;
}
