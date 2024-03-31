import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class GoalCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsString()

@IsNotEmpty()
  description: string

@IsBoolean()

@IsNotEmpty()
  isCompleted: boolean

@IsString()

@IsOptional()
  categoryId?: string

@IsString()

@IsOptional()
  userId?: string

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

export class GoalUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsString()

@IsOptional()
  description?: string

@IsBoolean()
  
  @IsOptional()
  isCompleted?: boolean

@IsString()

@IsOptional()
  categoryId?: string

@IsString()

@IsOptional()
  userId?: string

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
