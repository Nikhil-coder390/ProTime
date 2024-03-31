import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GoalDomainModule } from '../domain'
import { GoalController } from './goal.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { GoalByCategoryController } from './goalByCategory.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { GoalByUserController } from './goalByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    GoalDomainModule,

CategoryDomainModule,

UserDomainModule,

],
  controllers: [
    GoalController,
    
    GoalByCategoryController,
    
    GoalByUserController,
    
  ],
  providers: [],
})
export class GoalApplicationModule {}
