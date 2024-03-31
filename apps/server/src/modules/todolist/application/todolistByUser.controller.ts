import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TodolistDomainFacade } from '@server/modules/todolist/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TodolistApplicationEvent } from './todolist.application.event'
import { TodolistCreateDto } from './todolist.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class TodolistByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private todolistDomainFacade: TodolistDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/todolists')
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
      await this.todolistDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/todolists')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: TodolistCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.todolistDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TodolistApplicationEvent.TodolistCreated.Payload>(
      TodolistApplicationEvent
        .TodolistCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
