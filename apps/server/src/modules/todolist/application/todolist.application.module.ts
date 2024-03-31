import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TodolistDomainModule } from '../domain'
import { TodolistController } from './todolist.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { TodolistByUserController } from './todolistByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TodolistDomainModule,

UserDomainModule,

],
  controllers: [
    TodolistController,
    
    TodolistByUserController,
    
  ],
  providers: [],
})
export class TodolistApplicationModule {}
