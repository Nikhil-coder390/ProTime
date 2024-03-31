

import { Todolist } from "../todolist"

export class Todoitem {

id: string

content: string

isCompleted: boolean

todoListId: string

todoList?: Todolist

dateCreated: string

dateDeleted: string

dateUpdated: string

}
