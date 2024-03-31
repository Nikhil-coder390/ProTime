import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TodoitemDomainFacade } from './todoitem.domain.facade'
import { Todoitem } from './todoitem.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Todoitem]),
    DatabaseHelperModule,
  ],
  providers: [
    TodoitemDomainFacade,
    TodoitemDomainFacade,
  ],
  exports: [TodoitemDomainFacade],
})
export class TodoitemDomainModule {}
