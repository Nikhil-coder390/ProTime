import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TodoitemDomainFacade } from '@server/modules/todoitem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TodoitemApplicationEvent } from './todoitem.application.event'
import { TodoitemCreateDto } from './todoitem.dto'

import { TodolistDomainFacade } from '../../todolist/domain'

@Controller('/v1/todolists')
export class TodoitemByTodolistController {
  constructor(
    
    private todolistDomainFacade: TodolistDomainFacade,
    
    private todoitemDomainFacade: TodoitemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/todoList/:todoListId/todoitems')
  async findManyTodoListId(
    @Param('todoListId') todoListId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.todolistDomainFacade.findOneByIdOrFail(
        todoListId,
      )

    const items =
      await this.todoitemDomainFacade.findManyByTodoList(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/todoList/:todoListId/todoitems')
  async createByTodoListId(
    @Param('todoListId') todoListId: string,
    @Body() body: TodoitemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, todoListId }

    const item = await this.todoitemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TodoitemApplicationEvent.TodoitemCreated.Payload>(
      TodoitemApplicationEvent
        .TodoitemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
