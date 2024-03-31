import { ColumnNumeric } from '@server/core/database'
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

import { Category } from '../../../modules/category/domain'

import { User } from '../../../modules/user/domain'

import { Progresstracker } from '../../../modules/progresstracker/domain'

@Entity()
export class Goal {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({})

description: string

@Column({})

isCompleted: boolean

@Column({})

categoryId: string

@ManyToOne(
  () => Category,
  parent => parent.goals,
  )
  @JoinColumn({ name: 'categoryId' })

category?: Category

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.goals,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Progresstracker,
  child => child.goal,
  )

progresstrackers?: Progresstracker[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
