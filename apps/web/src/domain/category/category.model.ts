

import { User } from "../user"

import { Timeblock } from "../timeblock"

import { Goal } from "../goal"

export class Category {

id: string

name: string

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

timeblocks?: Timeblock[]

goals?: Goal[]

}
