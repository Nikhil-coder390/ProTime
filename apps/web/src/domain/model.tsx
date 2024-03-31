import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Category as CategoryModel } from './category/category.model'

import { Timeblock as TimeblockModel } from './timeblock/timeblock.model'

import { Goal as GoalModel } from './goal/goal.model'

import { Todolist as TodolistModel } from './todolist/todolist.model'

import { Todoitem as TodoitemModel } from './todoitem/todoitem.model'

import { Calendardate as CalendardateModel } from './calendardate/calendardate.model'

import { Pomodorosession as PomodorosessionModel } from './pomodorosession/pomodorosession.model'

import { Progresstracker as ProgresstrackerModel } from './progresstracker/progresstracker.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  
  export class User extends UserModel {}
  
  export class Notification extends NotificationModel {}
  
  export class Category extends CategoryModel {}
  
  export class Timeblock extends TimeblockModel {}
  
  export class Goal extends GoalModel {}
  
  export class Todolist extends TodolistModel {}
  
  export class Todoitem extends TodoitemModel {}
  
  export class Calendardate extends CalendardateModel {}
  
  export class Pomodorosession extends PomodorosessionModel {}
  
  export class Progresstracker extends ProgresstrackerModel {}
  
}
