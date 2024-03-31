import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProgresstrackerDomainFacade } from '@server/modules/progresstracker/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProgresstrackerApplicationEvent } from './progresstracker.application.event'
import { ProgresstrackerCreateDto } from './progresstracker.dto'

import { GoalDomainFacade } from '../../goal/domain'

@Controller('/v1/goals')
export class ProgresstrackerByGoalController {
  constructor(
    
    private goalDomainFacade: GoalDomainFacade,
    
    private progresstrackerDomainFacade: ProgresstrackerDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/goal/:goalId/progresstrackers')
  async findManyGoalId(
    @Param('goalId') goalId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.goalDomainFacade.findOneByIdOrFail(
        goalId,
      )

    const items =
      await this.progresstrackerDomainFacade.findManyByGoal(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/goal/:goalId/progresstrackers')
  async createByGoalId(
    @Param('goalId') goalId: string,
    @Body() body: ProgresstrackerCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, goalId }

    const item = await this.progresstrackerDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProgresstrackerApplicationEvent.ProgresstrackerCreated.Payload>(
      ProgresstrackerApplicationEvent
        .ProgresstrackerCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
