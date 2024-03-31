import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TodoitemDomainModule } from '../domain'
import { TodoitemController } from './todoitem.controller'

import { TodolistDomainModule } from '../../../modules/todolist/domain'

import { TodoitemByTodolistController } from './todoitemByTodolist.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TodoitemDomainModule,

TodolistDomainModule,

],
  controllers: [
    TodoitemController,
    
    TodoitemByTodolistController,
    
  ],
  providers: [],
})
export class TodoitemApplicationModule {}
