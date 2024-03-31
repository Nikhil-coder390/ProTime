import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CategoryDomainModule } from '../domain'
import { CategoryController } from './category.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { CategoryByUserController } from './categoryByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CategoryDomainModule,

UserDomainModule,

],
  controllers: [
    CategoryController,
    
    CategoryByUserController,
    
  ],
  providers: [],
})
export class CategoryApplicationModule {}
