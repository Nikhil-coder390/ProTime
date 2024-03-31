import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Todoitem } from './todoitem.model'

import { Todolist } from '../../todolist/domain'

@Injectable()
export class TodoitemDomainFacade {
  constructor(
    @InjectRepository(Todoitem)
    private repository: Repository<Todoitem>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Todoitem>,
  ): Promise<Todoitem> {
    return this.repository.save(values)
  }

  async update(
    item: Todoitem,
    values: Partial<Todoitem>,
  ): Promise<Todoitem> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Todoitem): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Todoitem> = {},
  ): Promise<Todoitem[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Todoitem> = {},
  ): Promise<Todoitem> {
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

async findManyByTodoList(
    item: Todolist,
    queryOptions: RequestHelper.QueryOptions<Todoitem> = {},
  ): Promise<Todoitem[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('todoList')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        todoListId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
