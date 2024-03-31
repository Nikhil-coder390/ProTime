import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TodoitemCreateDto {

@IsString()

@IsNotEmpty()
  content: string

@IsBoolean()

@IsNotEmpty()
  isCompleted: boolean

@IsString()

@IsOptional()
  todoListId?: string

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

export class TodoitemUpdateDto {

@IsString()

@IsOptional()
  content?: string

@IsBoolean()
  
  @IsOptional()
  isCompleted?: boolean

@IsString()

@IsOptional()
  todoListId?: string

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
