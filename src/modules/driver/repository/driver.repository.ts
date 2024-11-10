import { DeepPartial, FindOptionsRelations, Repository } from 'typeorm';
import { CrudContract, FindOptionsWhere } from '../../../common/contracts';
import { DriverEntity } from '../entity/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class DriverRepository implements CrudContract<DriverEntity> {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly repository: Repository<DriverEntity>,
  ) {}
  async recover(data: DriverEntity): Promise<DriverEntity> {
    return this.repository.recover(data);
  }

  create(data: DeepPartial<DriverEntity>) {
    const create = this.repository.create(data);
    return this.repository.save(create);
  }
  findAll(
    relations?: FindOptionsRelations<DriverEntity>,
    withDeleted?: boolean,
  ): Promise<DriverEntity[]> {
    return this.repository.find({ relations, withDeleted });
  }
  findBy(
    criteria: FindOptionsWhere<DriverEntity>,
    relations?: FindOptionsRelations<DriverEntity>,
    withDeleted?: boolean,
  ): Promise<DriverEntity[]> {
    return this.repository.find({ where: criteria, relations, withDeleted });
  }
  findOne(
    id: string,
    relations?: FindOptionsRelations<DriverEntity>,
    withDeleted?: boolean,
  ): Promise<DriverEntity> {
    return this.repository.findOne({ relations, withDeleted, where: { id } });
  }
  findOneBy(
    criteria: FindOptionsWhere<DriverEntity>,
    relations?: FindOptionsRelations<DriverEntity>,
    withDeleted?: boolean,
  ): Promise<DriverEntity> {
    return this.repository.findOne({ where: criteria, relations, withDeleted });
  }
  async update(data: DeepPartial<DriverEntity>): Promise<DriverEntity> {
    return this.repository.save(data);
  }

  async remove(data: DriverEntity): Promise<DriverEntity> {
    return this.repository.remove(data);
  }

  async softRemove(data: DriverEntity): Promise<DriverEntity> {
    return this.repository.softRemove(data);
  }
}
