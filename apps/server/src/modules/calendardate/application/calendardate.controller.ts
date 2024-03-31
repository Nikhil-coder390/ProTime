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
  Calendardate,
  CalendardateDomainFacade,
} from '@server/modules/calendardate/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { CalendardateApplicationEvent } from './calendardate.application.event'
import {
  CalendardateCreateDto,
  CalendardateUpdateDto,
} from './calendardate.dto'

@Controller('/v1/calendardates')
export class CalendardateController {
  constructor(
    private eventService: EventService,
    private calendardateDomainFacade: CalendardateDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.calendardateDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: CalendardateCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.calendardateDomainFacade.create(body)

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

  @Get('/:calendardateId')
  async findOne(
    @Param('calendardateId') calendardateId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.calendardateDomainFacade.findOneByIdOrFail(
        calendardateId,
        queryOptions,
      )

    return item
  }

  @Patch('/:calendardateId')
  async update(
    @Param('calendardateId') calendardateId: string,
    @Body() body: CalendardateUpdateDto,
  ) {
    const item =
      await this.calendardateDomainFacade.findOneByIdOrFail(
        calendardateId,
      )

    const itemUpdated = await this.calendardateDomainFacade.update(
      item,
      body as Partial<Calendardate>,
    )
    return itemUpdated
  }

  @Delete('/:calendardateId')
  async delete(@Param('calendardateId') calendardateId: string) {
    const item =
      await this.calendardateDomainFacade.findOneByIdOrFail(
        calendardateId,
      )

    await this.calendardateDomainFacade.delete(item)

    return item
  }
}
