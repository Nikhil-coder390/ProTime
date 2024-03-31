import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TimeblockDomainModule } from '../domain'
import { TimeblockController } from './timeblock.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { TimeblockByCategoryController } from './timeblockByCategory.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { TimeblockByUserController } from './timeblockByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TimeblockDomainModule,

CategoryDomainModule,

UserDomainModule,

],
  controllers: [
    TimeblockController,
    
    TimeblockByCategoryController,
    
    TimeblockByUserController,
    
  ],
  providers: [],
})
export class TimeblockApplicationModule {}
