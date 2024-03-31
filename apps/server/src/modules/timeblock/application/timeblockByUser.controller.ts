import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TimeblockDomainFacade } from '@server/modules/timeblock/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TimeblockApplicationEvent } from './timeblock.application.event'
import { TimeblockCreateDto } from './timeblock.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class TimeblockByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private timeblockDomainFacade: TimeblockDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/timeblocks')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.userDomainFacade.findOneByIdOrFail(
        userId,
      )

    const items =
      await this.timeblockDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/timeblocks')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: TimeblockCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
