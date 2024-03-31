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
  Todoitem,
  TodoitemDomainFacade,
} from '@server/modules/todoitem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TodoitemApplicationEvent } from './todoitem.application.event'
import {
  TodoitemCreateDto,
  TodoitemUpdateDto,
} from './todoitem.dto'

@Controller('/v1/todoitems')
export class TodoitemController {
  constructor(
    private eventService: EventService,
    private todoitemDomainFacade: TodoitemDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.todoitemDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TodoitemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.todoitemDomainFacade.create(body)

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

  @Get('/:todoitemId')
  async findOne(
    @Param('todoitemId') todoitemId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.todoitemDomainFacade.findOneByIdOrFail(
        todoitemId,
        queryOptions,
      )

    return item
  }

  @Patch('/:todoitemId')
  async update(
    @Param('todoitemId') todoitemId: string,
    @Body() body: TodoitemUpdateDto,
  ) {
    const item =
      await this.todoitemDomainFacade.findOneByIdOrFail(
        todoitemId,
      )

    const itemUpdated = await this.todoitemDomainFacade.update(
      item,
      body as Partial<Todoitem>,
    )
    return itemUpdated
  }

  @Delete('/:todoitemId')
  async delete(@Param('todoitemId') todoitemId: string) {
    const item =
      await this.todoitemDomainFacade.findOneByIdOrFail(
        todoitemId,
      )

    await this.todoitemDomainFacade.delete(item)

    return item
  }
}
