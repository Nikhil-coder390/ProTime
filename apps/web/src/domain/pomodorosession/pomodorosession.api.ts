import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Pomodorosession } from './pomodorosession.model'

export class PomodorosessionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Pomodorosession>,
  ): Promise<Pomodorosession[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/pomodorosessions${buildOptions}`)
  }

  static findOne(
    pomodorosessionId: string,
    queryOptions?: ApiHelper.QueryOptions<Pomodorosession>,
  ): Promise<Pomodorosession> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/pomodorosessions/${pomodorosessionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Pomodorosession>,
  ): Promise<Pomodorosession> {
    return HttpService.api.post(`/v1/pomodorosessions`, values)
  }

  static updateOne(
    pomodorosessionId: string,
    values: Partial<Pomodorosession>,
  ): Promise<Pomodorosession> {
    return HttpService.api.patch(
      `/v1/pomodorosessions/${pomodorosessionId}`,
      values,
    )
  }

  static deleteOne(pomodorosessionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/pomodorosessions/${pomodorosessionId}`)
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Pomodorosession>,
  ): Promise<Pomodorosession[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/pomodorosessions${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Pomodorosession>,
  ): Promise<Pomodorosession> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/pomodorosessions`,
      values,
    )
  }

}
