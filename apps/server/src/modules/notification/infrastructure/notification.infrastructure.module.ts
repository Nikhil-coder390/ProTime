import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationTimeblockSubscriber } from './subscribers/notification.timeblock.subscriber'

import { NotificationGoalSubscriber } from './subscribers/notification.goal.subscriber'

import { NotificationTodolistSubscriber } from './subscribers/notification.todolist.subscriber'

import { NotificationTodoitemSubscriber } from './subscribers/notification.todoitem.subscriber'

import { NotificationCalendardateSubscriber } from './subscribers/notification.calendardate.subscriber'

import { NotificationPomodorosessionSubscriber } from './subscribers/notification.pomodorosession.subscriber'

import { NotificationProgresstrackerSubscriber } from './subscribers/notification.progresstracker.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationCategorySubscriber,

NotificationTimeblockSubscriber,

NotificationGoalSubscriber,

NotificationTodolistSubscriber,

NotificationTodoitemSubscriber,

NotificationCalendardateSubscriber,

NotificationPomodorosessionSubscriber,

NotificationProgresstrackerSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
