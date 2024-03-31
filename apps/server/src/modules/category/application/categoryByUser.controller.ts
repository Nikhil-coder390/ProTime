import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CategoryDomainFacade } from '@server/modules/category/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CategoryApplicationEvent } from './category.application.event'
import { CategoryCreateDto } from './category.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class CategoryByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private categoryDomainFacade: CategoryDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/categorys')
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
      await this.categoryDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/categorys')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: CategoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.categoryDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CategoryApplicationEvent.CategoryCreated.Payload>(
      CategoryApplicationEvent
        .CategoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
