import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TodolistCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsBoolean()

@IsNotEmpty()
  isCompleted: boolean

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

export class TodolistUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsBoolean()
  
  @IsOptional()
  isCompleted?: boolean

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
