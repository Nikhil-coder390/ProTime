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

import { Todolist } from '../../../modules/todolist/domain'

@Entity()
export class Todoitem {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

content: string

@Column({})

isCompleted: boolean

@Column({})

todoListId: string

@ManyToOne(
  () => Todolist,
  parent => parent.todoitemsAsTodoList,
  )
  @JoinColumn({ name: 'todoListId' })

todoList?: Todolist

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
