

import { Notification } from "../notification"

import { Category } from "../category"

import { Timeblock } from "../timeblock"

import { Goal } from "../goal"

import { Todolist } from "../todolist"

import { Calendardate } from "../calendardate"

import { Pomodorosession } from "../pomodorosession"

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

categorys?: Category[]

timeblocks?: Timeblock[]

goals?: Goal[]

todolists?: Todolist[]

calendardates?: Calendardate[]

pomodorosessions?: Pomodorosession[]

}
