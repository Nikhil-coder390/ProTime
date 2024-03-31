import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { CategoryApi } from './category/category.api'

import { TimeblockApi } from './timeblock/timeblock.api'

import { GoalApi } from './goal/goal.api'

import { TodolistApi } from './todolist/todolist.api'

import { TodoitemApi } from './todoitem/todoitem.api'

import { CalendardateApi } from './calendardate/calendardate.api'

import { PomodorosessionApi } from './pomodorosession/pomodorosession.api'

import { ProgresstrackerApi } from './progresstracker/progresstracker.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}
  
  export class User extends UserApi {}
  
  export class Notification extends NotificationApi {}
  
  export class Category extends CategoryApi {}
  
  export class Timeblock extends TimeblockApi {}
  
  export class Goal extends GoalApi {}
  
  export class Todolist extends TodolistApi {}
  
  export class Todoitem extends TodoitemApi {}
  
  export class Calendardate extends CalendardateApi {}
  
  export class Pomodorosession extends PomodorosessionApi {}
  
  export class Progresstracker extends ProgresstrackerApi {}
  
}
