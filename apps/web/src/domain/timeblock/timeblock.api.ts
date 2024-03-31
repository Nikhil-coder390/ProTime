import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Timeblock } from './timeblock.model'

export class TimeblockApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Timeblock>,
  ): Promise<Timeblock[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/timeblocks${buildOptions}`)
  }

  static findOne(
    timeblockId: string,
    queryOptions?: ApiHelper.QueryOptions<Timeblock>,
  ): Promise<Timeblock> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/timeblocks/${timeblockId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    return HttpService.api.post(`/v1/timeblocks`, values)
  }

  static updateOne(
    timeblockId: string,
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    return HttpService.api.patch(
      `/v1/timeblocks/${timeblockId}`,
      values,
    )
  }

  static deleteOne(timeblockId: string): Promise<void> {
    return HttpService.api.delete(`/v1/timeblocks/${timeblockId}`)
  }

static findManyByCategoryId(
    categoryId: string,
    queryOptions?: ApiHelper.QueryOptions<Timeblock>,
  ): Promise<Timeblock[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/categorys/category/${categoryId}/timeblocks${buildOptions}`,
    )
  }

  static createOneByCategoryId(
    categoryId: string,
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    return HttpService.api.post(
      `/v1/categorys/category/${categoryId}/timeblocks`,
      values,
    )
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Timeblock>,
  ): Promise<Timeblock[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/timeblocks${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Timeblock>,
  ): Promise<Timeblock> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/timeblocks`,
      values,
    )
  }

}
