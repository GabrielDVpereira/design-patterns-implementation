import { Component } from "./component";
import { Mediator } from "./mediator";

export class ComponentA implements Component {
    constructor(
        private mediator?: Mediator
    ){}
    execute(){
        this.mediator?.notify(this, 'A') // component a will call component b through mediator
    }
    getInfo(): string {
        return 'I am info from A'
    }
    log(info: string): void {
        console.info(`This is the logged from A: ${info}`)
    }
   
    setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }
}