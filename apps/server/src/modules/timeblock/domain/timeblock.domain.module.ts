import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TimeblockDomainFacade } from './timeblock.domain.facade'
import { Timeblock } from './timeblock.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Timeblock]),
    DatabaseHelperModule,
  ],
  providers: [
    TimeblockDomainFacade,
    TimeblockDomainFacade,
  ],
  exports: [TimeblockDomainFacade],
})
export class TimeblockDomainModule {}
