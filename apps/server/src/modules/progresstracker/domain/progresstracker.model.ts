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

import { Goal } from '../../../modules/goal/domain'

@Entity()
export class Progresstracker {

@PrimaryGeneratedColumn('uuid')

id: string

@ColumnNumeric({"type":"numeric"})

progressPercentage: number

@Column({})

goalId: string

@ManyToOne(
  () => Goal,
  parent => parent.progresstrackers,
  )
  @JoinColumn({ name: 'goalId' })

goal?: Goal

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
