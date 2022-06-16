import { Component } from "./component";
import { Mediator } from "./mediator";

export class ComponentB implements Component {
    constructor(
        private mediator?: Mediator
    ){}
    getInfo(): string {
        return 'I am info from B'
    }
    log(info: string): void {
        console.info(`This is the logged from B: ${info}`)
    }
   
    setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }
}