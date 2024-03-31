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

@Entity()
export class Timeblock {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({})

startTime: string

@Column({})

endTime: string

@Column({})

categoryId: string

@ManyToOne(
  () => Category,
  parent => parent.timeblocks,
  )
  @JoinColumn({ name: 'categoryId' })

category?: Category

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.timeblocks,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
