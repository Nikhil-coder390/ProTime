

import { Category } from "../category"

import { User } from "../user"

import { Progresstracker } from "../progresstracker"

export class Goal {

id: string

title: string

description: string

isCompleted: boolean

categoryId: string

category?: Category

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

progresstrackers?: Progresstracker[]

}
