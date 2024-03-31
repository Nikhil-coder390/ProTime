import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TodolistDomainFacade } from './todolist.domain.facade'
import { Todolist } from './todolist.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Todolist]),
    DatabaseHelperModule,
  ],
  providers: [
    TodolistDomainFacade,
    TodolistDomainFacade,
  ],
  exports: [TodolistDomainFacade],
})
export class TodolistDomainModule {}
