import {
  DeepPartial,
  FindOptionsRelations,
  FindOptionsWhere as TypeOrmFindOptionsWhere,
} from 'typeorm';

export type FindOptionsWhere<T> =
  | TypeOrmFindOptionsWhere<T>
  | TypeOrmFindOptionsWhere<T>[];
export interface CrudContract<T> {
  create(data: DeepPartial<T>): Promise<T>;
  findAll(
    relations?: FindOptionsRelations<T>,
    withDeleted?: boolean,
  ): Promise<T[]>;
  findBy(
    criteria: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
    withDeleted?: boolean,
  ): Promise<T[]>;
  findOne(
    id: string,
    relations?: FindOptionsRelations<T>,
    withDeleted?: boolean,
  ): Promise<T>;
  findOneBy(
    criteria: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
    withDeleted?: boolean,
  ): Promise<T>;
  update(data: DeepPartial<T>): Promise<T>;
  remove(data: DeepPartial<T>): Promise<T>;
  softRemove(data: DeepPartial<T>): Promise<T>;
  recover(data: DeepPartial<T>): Promise<T>;
}
