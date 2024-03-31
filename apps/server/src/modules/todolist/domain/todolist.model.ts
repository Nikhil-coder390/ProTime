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

import { User } from '../../../modules/user/domain'

import { Todoitem } from '../../../modules/todoitem/domain'

@Entity()
export class Todolist {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({})

isCompleted: boolean

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.todolists,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Todoitem,
  child => child.todoList,
  )

todoitemsAsTodoList?: Todoitem[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
