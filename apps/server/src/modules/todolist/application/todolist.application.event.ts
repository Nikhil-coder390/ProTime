export namespace TodolistApplicationEvent {
  export namespace TodolistCreated {
    export const key = 'todolist.application.todolist.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
