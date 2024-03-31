import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Calendardate } from './calendardate.model'

export class CalendardateApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Calendardate>,
  ): Promise<Calendardate[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/calendardates${buildOptions}`)
  }

  static findOne(
    calendardateId: string,
    queryOptions?: ApiHelper.QueryOptions<Calendardate>,
  ): Promise<Calendardate> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/calendardates/${calendardateId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Calendardate>,
  ): Promise<Calendardate> {
    return HttpService.api.post(`/v1/calendardates`, values)
  }

  static updateOne(
    calendardateId: string,
    values: Partial<Calendardate>,
  ): Promise<Calendardate> {
    return HttpService.api.patch(
      `/v1/calendardates/${calendardateId}`,
      values,
    )
  }

  static deleteOne(calendardateId: string): Promise<void> {
    return HttpService.api.delete(`/v1/calendardates/${calendardateId}`)
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Calendardate>,
  ): Promise<Calendardate[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/calendardates${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Calendardate>,
  ): Promise<Calendardate> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/calendardates`,
      values,
    )
  }

}
