import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GoalDomainFacade } from '@server/modules/goal/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GoalApplicationEvent } from './goal.application.event'
import { GoalCreateDto } from './goal.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class GoalByCategoryController {
  constructor(
    
    private categoryDomainFacade: CategoryDomainFacade,
    
    private goalDomainFacade: GoalDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/category/:categoryId/goals')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.categoryDomainFacade.findOneByIdOrFail(
        categoryId,
      )

    const items =
      await this.goalDomainFacade.findManyByCategory(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/category/:categoryId/goals')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: GoalCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.goalDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GoalApplicationEvent.GoalCreated.Payload>(
      GoalApplicationEvent
        .GoalCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
