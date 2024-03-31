export namespace TimeblockApplicationEvent {
  export namespace TimeblockCreated {
    export const key = 'timeblock.application.timeblock.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
