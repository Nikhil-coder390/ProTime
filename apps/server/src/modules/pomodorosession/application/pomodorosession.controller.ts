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
  Pomodorosession,
  PomodorosessionDomainFacade,
} from '@server/modules/pomodorosession/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PomodorosessionApplicationEvent } from './pomodorosession.application.event'
import {
  PomodorosessionCreateDto,
  PomodorosessionUpdateDto,
} from './pomodorosession.dto'

@Controller('/v1/pomodorosessions')
export class PomodorosessionController {
  constructor(
    private eventService: EventService,
    private pomodorosessionDomainFacade: PomodorosessionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.pomodorosessionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: PomodorosessionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.pomodorosessionDomainFacade.create(body)

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

  @Get('/:pomodorosessionId')
  async findOne(
    @Param('pomodorosessionId') pomodorosessionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.pomodorosessionDomainFacade.findOneByIdOrFail(
        pomodorosessionId,
        queryOptions,
      )

    return item
  }

  @Patch('/:pomodorosessionId')
  async update(
    @Param('pomodorosessionId') pomodorosessionId: string,
    @Body() body: PomodorosessionUpdateDto,
  ) {
    const item =
      await this.pomodorosessionDomainFacade.findOneByIdOrFail(
        pomodorosessionId,
      )

    const itemUpdated = await this.pomodorosessionDomainFacade.update(
      item,
      body as Partial<Pomodorosession>,
    )
    return itemUpdated
  }

  @Delete('/:pomodorosessionId')
  async delete(@Param('pomodorosessionId') pomodorosessionId: string) {
    const item =
      await this.pomodorosessionDomainFacade.findOneByIdOrFail(
        pomodorosessionId,
      )

    await this.pomodorosessionDomainFacade.delete(item)

    return item
  }
}
