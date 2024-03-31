import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CalendardateDomainModule } from '../domain'
import { CalendardateController } from './calendardate.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { CalendardateByUserController } from './calendardateByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CalendardateDomainModule,

UserDomainModule,

],
  controllers: [
    CalendardateController,
    
    CalendardateByUserController,
    
  ],
  providers: [],
})
export class CalendardateApplicationModule {}
