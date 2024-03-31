import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Calendardate } from './calendardate.model'

import { User } from '../../user/domain'

@Injectable()
export class CalendardateDomainFacade {
  constructor(
    @InjectRepository(Calendardate)
    private repository: Repository<Calendardate>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Calendardate>,
  ): Promise<Calendardate> {
    return this.repository.save(values)
  }

  async update(
    item: Calendardate,
    values: Partial<Calendardate>,
  ): Promise<Calendardate> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Calendardate): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Calendardate> = {},
  ): Promise<Calendardate[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Calendardate> = {},
  ): Promise<Calendardate> {
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

async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Calendardate> = {},
  ): Promise<Calendardate[]> {
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
