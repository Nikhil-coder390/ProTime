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
  Timeblock,
  TimeblockDomainFacade,
} from '@server/modules/timeblock/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TimeblockApplicationEvent } from './timeblock.application.event'
import {
  TimeblockCreateDto,
  TimeblockUpdateDto,
} from './timeblock.dto'

@Controller('/v1/timeblocks')
export class TimeblockController {
  constructor(
    private eventService: EventService,
    private timeblockDomainFacade: TimeblockDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.timeblockDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TimeblockCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.timeblockDomainFacade.create(body)

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

  @Get('/:timeblockId')
  async findOne(
    @Param('timeblockId') timeblockId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.timeblockDomainFacade.findOneByIdOrFail(
        timeblockId,
        queryOptions,
      )

    return item
  }

  @Patch('/:timeblockId')
  async update(
    @Param('timeblockId') timeblockId: string,
    @Body() body: TimeblockUpdateDto,
  ) {
    const item =
      await this.timeblockDomainFacade.findOneByIdOrFail(
        timeblockId,
      )

    const itemUpdated = await this.timeblockDomainFacade.update(
      item,
      body as Partial<Timeblock>,
    )
    return itemUpdated
  }

  @Delete('/:timeblockId')
  async delete(@Param('timeblockId') timeblockId: string) {
    const item =
      await this.timeblockDomainFacade.findOneByIdOrFail(
        timeblockId,
      )

    await this.timeblockDomainFacade.delete(item)

    return item
  }
}
