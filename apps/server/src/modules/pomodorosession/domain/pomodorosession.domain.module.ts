import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PomodorosessionDomainFacade } from './pomodorosession.domain.facade'
import { Pomodorosession } from './pomodorosession.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Pomodorosession]),
    DatabaseHelperModule,
  ],
  providers: [
    PomodorosessionDomainFacade,
    PomodorosessionDomainFacade,
  ],
  exports: [PomodorosessionDomainFacade],
})
export class PomodorosessionDomainModule {}
