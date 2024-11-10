import { Column, Entity } from 'typeorm';
import { EntityAbstract } from '../../../common/abstracts';

@Entity({
  name: 'drivers',
})
export class DriverEntity extends EntityAbstract {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  car: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  phone: string;
}
