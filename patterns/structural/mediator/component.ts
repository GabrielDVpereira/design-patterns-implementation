import { Mediator } from "./mediator"

export interface Component {
    getInfo(): string 
    log(info: string): void
    setMediator(mediator: Mediator): void
}