

import { User } from "../user"

import { Todoitem } from "../todoitem"

export class Todolist {

id: string

title: string

isCompleted: boolean

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

todoitemsAsTodoList?: Todoitem[]

}
