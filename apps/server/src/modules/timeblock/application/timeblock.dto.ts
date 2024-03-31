import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TimeblockCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsString()

@IsNotEmpty()
  startTime: string

@IsString()

@IsNotEmpty()
  endTime: string

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

export class TimeblockUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsString()

@IsOptional()
  startTime?: string

@IsString()

@IsOptional()
  endTime?: string

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
