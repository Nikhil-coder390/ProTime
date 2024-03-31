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

@Entity()
export class Calendardate {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

date: string

@Column({"nullable":true})

iconUrl?: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.calendardates,
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
