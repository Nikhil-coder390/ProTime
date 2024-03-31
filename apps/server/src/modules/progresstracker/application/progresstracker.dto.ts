import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ProgresstrackerCreateDto {

@IsNumber()

@IsNotEmpty()
  progressPercentage: number

@IsString()

@IsOptional()
  goalId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

export class ProgresstrackerUpdateDto {

@IsNumber()

@IsOptional()
  progressPercentage?: number

@IsString()

@IsOptional()
  goalId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}
