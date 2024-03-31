

import { Category } from "../category"

import { User } from "../user"

export class Timeblock {

id: string

title: string

startTime: string

endTime: string

categoryId: string

category?: Category

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

}
