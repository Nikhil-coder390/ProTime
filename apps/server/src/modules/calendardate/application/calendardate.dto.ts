import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CalendardateCreateDto {

@IsString()

@IsNotEmpty()
  date: string

@IsString()

@IsOptional()
  iconUrl?: string

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

export class CalendardateUpdateDto {

@IsString()

@IsOptional()
  date?: string

@IsString()

@IsOptional()
  iconUrl?: string

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
