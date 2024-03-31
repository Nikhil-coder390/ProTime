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
  Progresstracker,
  ProgresstrackerDomainFacade,
} from '@server/modules/progresstracker/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ProgresstrackerApplicationEvent } from './progresstracker.application.event'
import {
  ProgresstrackerCreateDto,
  ProgresstrackerUpdateDto,
} from './progresstracker.dto'

@Controller('/v1/progresstrackers')
export class ProgresstrackerController {
  constructor(
    private eventService: EventService,
    private progresstrackerDomainFacade: ProgresstrackerDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.progresstrackerDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ProgresstrackerCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.progresstrackerDomainFacade.create(body)

    await this.eventService.emit<ProgresstrackerApplicationEvent.ProgresstrackerCreated.Payload>(
      ProgresstrackerApplicationEvent
        .ProgresstrackerCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:progresstrackerId')
  async findOne(
    @Param('progresstrackerId') progresstrackerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.progresstrackerDomainFacade.findOneByIdOrFail(
        progresstrackerId,
        queryOptions,
      )

    return item
  }

  @Patch('/:progresstrackerId')
  async update(
    @Param('progresstrackerId') progresstrackerId: string,
    @Body() body: ProgresstrackerUpdateDto,
  ) {
    const item =
      await this.progresstrackerDomainFacade.findOneByIdOrFail(
        progresstrackerId,
      )

    const itemUpdated = await this.progresstrackerDomainFacade.update(
      item,
      body as Partial<Progresstracker>,
    )
    return itemUpdated
  }

  @Delete('/:progresstrackerId')
  async delete(@Param('progresstrackerId') progresstrackerId: string) {
    const item =
      await this.progresstrackerDomainFacade.findOneByIdOrFail(
        progresstrackerId,
      )

    await this.progresstrackerDomainFacade.delete(item)

    return item
  }
}
