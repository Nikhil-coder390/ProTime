import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Timeblock } from './timeblock.model'

import { Category } from '../../category/domain'

import { User } from '../../user/domain'

@Injectable()
export class TimeblockDomainFacade {
  constructor(
    @InjectRepository(Timeblock)
    private repository: Repository<Timeblock>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    return this.repository.save(values)
  }

  async update(
    item: Timeblock,
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Timeblock): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Timeblock> = {},
  ): Promise<Timeblock[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Timeblock> = {},
  ): Promise<Timeblock> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByCategory(
    item: Category,
    queryOptions: RequestHelper.QueryOptions<Timeblock> = {},
  ): Promise<Timeblock[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('category')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        categoryId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Timeblock> = {},
  ): Promise<Timeblock[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
