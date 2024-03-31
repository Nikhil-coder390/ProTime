import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TimeblockDomainFacade } from '@server/modules/timeblock/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TimeblockApplicationEvent } from './timeblock.application.event'
import { TimeblockCreateDto } from './timeblock.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class TimeblockByCategoryController {
  constructor(
    
    private categoryDomainFacade: CategoryDomainFacade,
    
    private timeblockDomainFacade: TimeblockDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/category/:categoryId/timeblocks')
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
      await this.timeblockDomainFacade.findManyByCategory(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/category/:categoryId/timeblocks')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: TimeblockCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.timeblockDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TimeblockApplicationEvent.TimeblockCreated.Payload>(
      TimeblockApplicationEvent
        .TimeblockCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
