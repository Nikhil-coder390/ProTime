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

import { Timeblock } from '../../../modules/timeblock/domain'

import { Goal } from '../../../modules/goal/domain'

@Entity()
export class Category {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.categorys,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Timeblock,
  child => child.category,
  )

timeblocks?: Timeblock[]

@OneToMany(
  () => Goal,
  child => child.category,
  )

goals?: Goal[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
