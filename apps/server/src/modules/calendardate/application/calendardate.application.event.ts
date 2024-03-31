export namespace CalendardateApplicationEvent {
  export namespace CalendardateCreated {
    export const key = 'calendardate.application.calendardate.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
