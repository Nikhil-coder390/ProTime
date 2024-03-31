import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Progresstracker } from './progresstracker.model'

export class ProgresstrackerApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Progresstracker>,
  ): Promise<Progresstracker[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/progresstrackers${buildOptions}`)
  }

  static findOne(
    progresstrackerId: string,
    queryOptions?: ApiHelper.QueryOptions<Progresstracker>,
  ): Promise<Progresstracker> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/progresstrackers/${progresstrackerId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Progresstracker>,
  ): Promise<Progresstracker> {
    return HttpService.api.post(`/v1/progresstrackers`, values)
  }

  static updateOne(
    progresstrackerId: string,
    values: Partial<Progresstracker>,
  ): Promise<Progresstracker> {
    return HttpService.api.patch(
      `/v1/progresstrackers/${progresstrackerId}`,
      values,
    )
  }

  static deleteOne(progresstrackerId: string): Promise<void> {
    return HttpService.api.delete(`/v1/progresstrackers/${progresstrackerId}`)
  }

static findManyByGoalId(
    goalId: string,
    queryOptions?: ApiHelper.QueryOptions<Progresstracker>,
  ): Promise<Progresstracker[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/goals/goal/${goalId}/progresstrackers${buildOptions}`,
    )
  }

  static createOneByGoalId(
    goalId: string,
    values: Partial<Progresstracker>,
  ): Promise<Progresstracker> {
    return HttpService.api.post(
      `/v1/goals/goal/${goalId}/progresstrackers`,
      values,
    )
  }

}
