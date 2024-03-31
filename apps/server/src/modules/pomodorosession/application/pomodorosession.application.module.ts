import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PomodorosessionDomainModule } from '../domain'
import { PomodorosessionController } from './pomodorosession.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { PomodorosessionByUserController } from './pomodorosessionByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PomodorosessionDomainModule,

UserDomainModule,

],
  controllers: [
    PomodorosessionController,
    
    PomodorosessionByUserController,
    
  ],
  providers: [],
})
export class PomodorosessionApplicationModule {}
