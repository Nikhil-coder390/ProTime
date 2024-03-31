export namespace ProgresstrackerApplicationEvent {
  export namespace ProgresstrackerCreated {
    export const key = 'progresstracker.application.progresstracker.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
