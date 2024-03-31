import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { CategoryDomainModule } from './category/domain'

import { TimeblockDomainModule } from './timeblock/domain'

import { GoalDomainModule } from './goal/domain'

import { TodolistDomainModule } from './todolist/domain'

import { TodoitemDomainModule } from './todoitem/domain'

import { CalendardateDomainModule } from './calendardate/domain'

import { PomodorosessionDomainModule } from './pomodorosession/domain'

import { ProgresstrackerDomainModule } from './progresstracker/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

CategoryDomainModule,

TimeblockDomainModule,

GoalDomainModule,

TodolistDomainModule,

TodoitemDomainModule,

CalendardateDomainModule,

PomodorosessionDomainModule,

ProgresstrackerDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
