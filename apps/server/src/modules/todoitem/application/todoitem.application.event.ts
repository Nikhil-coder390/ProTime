export namespace TodoitemApplicationEvent {
  export namespace TodoitemCreated {
    export const key = 'todoitem.application.todoitem.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
