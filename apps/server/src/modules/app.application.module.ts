import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { CategoryApplicationModule } from './category/application'

import { TimeblockApplicationModule } from './timeblock/application'

import { GoalApplicationModule } from './goal/application'

import { TodolistApplicationModule } from './todolist/application'

import { TodoitemApplicationModule } from './todoitem/application'

import { CalendardateApplicationModule } from './calendardate/application'

import { PomodorosessionApplicationModule } from './pomodorosession/application'

import { ProgresstrackerApplicationModule } from './progresstracker/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

CategoryApplicationModule,

TimeblockApplicationModule,

GoalApplicationModule,

TodolistApplicationModule,

TodoitemApplicationModule,

CalendardateApplicationModule,

PomodorosessionApplicationModule,

ProgresstrackerApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
