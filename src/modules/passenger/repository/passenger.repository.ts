import { DeepPartial, FindOptionsRelations, Repository } from 'typeorm';
import { CrudContract, FindOptionsWhere } from '../../../common/contracts';

import { InjectRepository } from '@nestjs/typeorm';
import { Passenger } from '../entity/passenger.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PassengerRepository implements CrudContract<Passenger> {
  constructor(
    @InjectRepository(Passenger)
    private readonly repository: Repository<Passenger>,
  ) {}
  async recover(data: Passenger): Promise<Passenger> {
    return this.repository.recover(data);
  }

  create(data: DeepPartial<Passenger>) {
    const create = this.repository.create(data);
    return this.repository.save(create);
  }
  findAll(
    relations?: FindOptionsRelations<Passenger>,
    withDeleted?: boolean,
  ): Promise<Passenger[]> {
    return this.repository.find({
      relations,
      withDeleted,
    });
  }
  findBy(
    criteria: FindOptionsWhere<Passenger>,
    relations?: FindOptionsRelations<Passenger>,
    withDeleted?: boolean,
  ): Promise<Passenger[]> {
    return this.repository.find({
      where: criteria,
      relations,
      withDeleted,
    });
  }
  findOne(
    id: string,
    relations?: FindOptionsRelations<Passenger>,
    withDeleted?: boolean,
  ): Promise<Passenger> {
    return this.repository.findOne({
      relations,
      withDeleted,
      where: { id },
    });
  }
  findOneBy(
    criteria: FindOptionsWhere<Passenger>,
    relations?: FindOptionsRelations<Passenger>,
    withDeleted?: boolean,
  ): Promise<Passenger> {
    return this.repository.findOne({
      where: criteria,
      relations,
      withDeleted,
    });
  }
  async update(data: DeepPartial<Passenger>): Promise<Passenger> {
    return this.repository.save(data);
  }

  async remove(data: Passenger): Promise<Passenger> {
    return this.repository.remove(data);
  }

  async softRemove(data: Passenger): Promise<Passenger> {
    return this.repository.softRemove(data);
  }
}
