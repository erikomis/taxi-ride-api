import { Injectable } from '@nestjs/common';
import { RideEntity } from '../entity/ride.entity';
import { DeepPartial, FindOptionsRelations, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudContract, FindOptionsWhere } from '../../../common/contracts';

@Injectable()
export class RideRepository implements CrudContract<RideEntity> {
  constructor(
    @InjectRepository(RideEntity)
    private readonly repository: Repository<RideEntity>,
  ) {}

  async recover(data: RideEntity): Promise<RideEntity> {
    return this.repository.recover(data);
  }
  create(data: DeepPartial<RideEntity>) {
    const create = this.repository.create(data);

    return this.repository.save(create);
  }
  findAll(
    relations?: FindOptionsRelations<RideEntity>,
    withDeleted?: boolean,
  ): Promise<RideEntity[]> {
    return this.repository.find({
      relations,
      withDeleted,
    });
  }
  findBy(
    criteria: FindOptionsWhere<RideEntity>,
    relations?: FindOptionsRelations<RideEntity>,
    withDeleted?: boolean,
  ): Promise<RideEntity[]> {
    return this.repository.find({
      where: criteria,
      relations,
      withDeleted,
    });
  }
  findOne(
    id: string,
    relations?: FindOptionsRelations<RideEntity>,
    withDeleted?: boolean,
  ): Promise<RideEntity> {
    return this.repository.findOne({
      relations,
      withDeleted,
      where: { id },
    });
  }
  findOneBy(
    criteria: FindOptionsWhere<RideEntity>,
    relations?: FindOptionsRelations<RideEntity>,
    withDeleted?: boolean,
  ): Promise<RideEntity> {
    return this.repository.findOne({
      where: criteria,
      relations,
      withDeleted,
    });
  }
  async update(data: DeepPartial<RideEntity>): Promise<RideEntity> {
    return this.repository.save(data);
  }

  async remove(data: RideEntity): Promise<RideEntity> {
    return this.repository.remove(data);
  }

  async softRemove(data: RideEntity): Promise<RideEntity> {
    return this.repository.softRemove(data);
  }
}
