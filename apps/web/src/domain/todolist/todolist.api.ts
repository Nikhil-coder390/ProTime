import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Todolist } from './todolist.model'

export class TodolistApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Todolist>,
  ): Promise<Todolist[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/todolists${buildOptions}`)
  }

  static findOne(
    todolistId: string,
    queryOptions?: ApiHelper.QueryOptions<Todolist>,
  ): Promise<Todolist> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/todolists/${todolistId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Todolist>,
  ): Promise<Todolist> {
    return HttpService.api.post(`/v1/todolists`, values)
  }

  static updateOne(
    todolistId: string,
    values: Partial<Todolist>,
  ): Promise<Todolist> {
    return HttpService.api.patch(
      `/v1/todolists/${todolistId}`,
      values,
    )
  }

  static deleteOne(todolistId: string): Promise<void> {
    return HttpService.api.delete(`/v1/todolists/${todolistId}`)
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Todolist>,
  ): Promise<Todolist[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/todolists${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Todolist>,
  ): Promise<Todolist> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/todolists`,
      values,
    )
  }

}
