import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class PomodorosessionCreateDto {

@IsNumber()

@IsNotEmpty()
  duration: number

@IsNumber()

@IsNotEmpty()
  breakDuration: number

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

export class PomodorosessionUpdateDto {

@IsNumber()

@IsOptional()
  duration?: number

@IsNumber()

@IsOptional()
  breakDuration?: number

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
