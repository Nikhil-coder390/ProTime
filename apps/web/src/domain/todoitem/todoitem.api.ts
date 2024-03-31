import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Todoitem } from './todoitem.model'

export class TodoitemApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Todoitem>,
  ): Promise<Todoitem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/todoitems${buildOptions}`)
  }

  static findOne(
    todoitemId: string,
    queryOptions?: ApiHelper.QueryOptions<Todoitem>,
  ): Promise<Todoitem> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/todoitems/${todoitemId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Todoitem>,
  ): Promise<Todoitem> {
    return HttpService.api.post(`/v1/todoitems`, values)
  }

  static updateOne(
    todoitemId: string,
    values: Partial<Todoitem>,
  ): Promise<Todoitem> {
    return HttpService.api.patch(
      `/v1/todoitems/${todoitemId}`,
      values,
    )
  }

  static deleteOne(todoitemId: string): Promise<void> {
    return HttpService.api.delete(`/v1/todoitems/${todoitemId}`)
  }

static findManyByTodoListId(
    todoListId: string,
    queryOptions?: ApiHelper.QueryOptions<Todoitem>,
  ): Promise<Todoitem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/todolists/todoList/${todoListId}/todoitems${buildOptions}`,
    )
  }

  static createOneByTodoListId(
    todoListId: string,
    values: Partial<Todoitem>,
  ): Promise<Todoitem> {
    return HttpService.api.post(
      `/v1/todolists/todoList/${todoListId}/todoitems`,
      values,
    )
  }

}
