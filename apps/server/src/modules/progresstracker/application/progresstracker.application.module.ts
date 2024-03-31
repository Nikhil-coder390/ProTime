import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProgresstrackerDomainModule } from '../domain'
import { ProgresstrackerController } from './progresstracker.controller'

import { GoalDomainModule } from '../../../modules/goal/domain'

import { ProgresstrackerByGoalController } from './progresstrackerByGoal.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProgresstrackerDomainModule,

GoalDomainModule,

],
  controllers: [
    ProgresstrackerController,
    
    ProgresstrackerByGoalController,
    
  ],
  providers: [],
})
export class ProgresstrackerApplicationModule {}
