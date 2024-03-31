import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Todolist,
  TodolistDomainFacade,
} from '@server/modules/todolist/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TodolistApplicationEvent } from './todolist.application.event'
import {
  TodolistCreateDto,
  TodolistUpdateDto,
} from './todolist.dto'

@Controller('/v1/todolists')
export class TodolistController {
  constructor(
    private eventService: EventService,
    private todolistDomainFacade: TodolistDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.todolistDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TodolistCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.todolistDomainFacade.create(body)

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

  @Get('/:todolistId')
  async findOne(
    @Param('todolistId') todolistId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.todolistDomainFacade.findOneByIdOrFail(
        todolistId,
        queryOptions,
      )

    return item
  }

  @Patch('/:todolistId')
  async update(
    @Param('todolistId') todolistId: string,
    @Body() body: TodolistUpdateDto,
  ) {
    const item =
      await this.todolistDomainFacade.findOneByIdOrFail(
        todolistId,
      )

    const itemUpdated = await this.todolistDomainFacade.update(
      item,
      body as Partial<Todolist>,
    )
    return itemUpdated
  }

  @Delete('/:todolistId')
  async delete(@Param('todolistId') todolistId: string) {
    const item =
      await this.todolistDomainFacade.findOneByIdOrFail(
        todolistId,
      )

    await this.todolistDomainFacade.delete(item)

    return item
  }
}
