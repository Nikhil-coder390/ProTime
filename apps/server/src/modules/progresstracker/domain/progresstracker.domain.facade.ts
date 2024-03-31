import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Progresstracker } from './progresstracker.model'

import { Goal } from '../../goal/domain'

@Injectable()
export class ProgresstrackerDomainFacade {
  constructor(
    @InjectRepository(Progresstracker)
    private repository: Repository<Progresstracker>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Progresstracker>,
  ): Promise<Progresstracker> {
    return this.repository.save(values)
  }

  async update(
    item: Progresstracker,
    values: Partial<Progresstracker>,
  ): Promise<Progresstracker> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Progresstracker): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Progresstracker> = {},
  ): Promise<Progresstracker[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Progresstracker> = {},
  ): Promise<Progresstracker> {
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

async findManyByGoal(
    item: Goal,
    queryOptions: RequestHelper.QueryOptions<Progresstracker> = {},
  ): Promise<Progresstracker[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('goal')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        goalId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
