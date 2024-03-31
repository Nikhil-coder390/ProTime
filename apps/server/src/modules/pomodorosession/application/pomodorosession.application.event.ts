export namespace PomodorosessionApplicationEvent {
  export namespace PomodorosessionCreated {
    export const key = 'pomodorosession.application.pomodorosession.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
