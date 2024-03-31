import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Notification } from '../../../modules/notification/domain'

import { Category } from '../../../modules/category/domain'

import { Timeblock } from '../../../modules/timeblock/domain'

import { Goal } from '../../../modules/goal/domain'

import { Todolist } from '../../../modules/todolist/domain'

import { Calendardate } from '../../../modules/calendardate/domain'

import { Pomodorosession } from '../../../modules/pomodorosession/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ select: false, nullable: true })
  password: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

@OneToMany(
  () => Category,
  child => child.user,
  )

categorys?: Category[]

@OneToMany(
  () => Timeblock,
  child => child.user,
  )

timeblocks?: Timeblock[]

@OneToMany(
  () => Goal,
  child => child.user,
  )

goals?: Goal[]

@OneToMany(
  () => Todolist,
  child => child.user,
  )

todolists?: Todolist[]

@OneToMany(
  () => Calendardate,
  child => child.user,
  )

calendardates?: Calendardate[]

@OneToMany(
  () => Pomodorosession,
  child => child.user,
  )

pomodorosessions?: Pomodorosession[]

@OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
