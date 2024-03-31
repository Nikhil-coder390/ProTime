import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CalendardateDomainFacade } from '@server/modules/calendardate/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CalendardateApplicationEvent } from './calendardate.application.event'
import { CalendardateCreateDto } from './calendardate.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class CalendardateByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private calendardateDomainFacade: CalendardateDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/calendardates')
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
      await this.calendardateDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/calendardates')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: CalendardateCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.calendardateDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CalendardateApplicationEvent.CalendardateCreated.Payload>(
      CalendardateApplicationEvent
        .CalendardateCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
