import { Column, Entity } from 'typeorm';
import { EntityAbstract } from '../../../common/abstracts';

@Entity({
  name: 'passengers',
})
export class Passenger extends EntityAbstract {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  phone: string;
}
