import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ProgresstrackerDomainFacade } from './progresstracker.domain.facade'
import { Progresstracker } from './progresstracker.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Progresstracker]),
    DatabaseHelperModule,
  ],
  providers: [
    ProgresstrackerDomainFacade,
    ProgresstrackerDomainFacade,
  ],
  exports: [ProgresstrackerDomainFacade],
})
export class ProgresstrackerDomainModule {}
