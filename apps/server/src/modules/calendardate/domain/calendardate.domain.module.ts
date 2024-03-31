import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { CalendardateDomainFacade } from './calendardate.domain.facade'
import { Calendardate } from './calendardate.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Calendardate]),
    DatabaseHelperModule,
  ],
  providers: [
    CalendardateDomainFacade,
    CalendardateDomainFacade,
  ],
  exports: [CalendardateDomainFacade],
})
export class CalendardateDomainModule {}
