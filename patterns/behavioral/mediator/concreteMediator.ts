import { Component } from "./component";
import { Mediator } from "./mediator";

type Event = 'A' | 'B'

export class ConcreteMediator implements Mediator {
    constructor(
        private componentA: Component,
        private componentB: Component
    ){
        this.componentA.setMediator(this)
        this.componentB.setMediator(this)
    }
    notify(sender: Component, event: Event): void {
        if(event === 'A'){
           this.execA()
           return
        }

        if(event === 'B'){
            this.execB()
            return
        }
    }

    execA(){
        const infoFromA  = this.componentA.getInfo()
        this.componentB.log(infoFromA!)
    }
    execB(){
        const infoFromB  = this.componentB.getInfo()
        this.componentA.log(infoFromB!)
    }
}