import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PomodorosessionDomainFacade } from '@server/modules/pomodorosession/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PomodorosessionApplicationEvent } from './pomodorosession.application.event'
import { PomodorosessionCreateDto } from './pomodorosession.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PomodorosessionByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private pomodorosessionDomainFacade: PomodorosessionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/pomodorosessions')
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
      await this.pomodorosessionDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/pomodorosessions')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PomodorosessionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.pomodorosessionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PomodorosessionApplicationEvent.PomodorosessionCreated.Payload>(
      PomodorosessionApplicationEvent
        .PomodorosessionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
