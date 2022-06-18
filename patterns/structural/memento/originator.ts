import crypto from 'crypto'
import { ConcreteSnapshot } from './concreteSnapshot'
import { Snapshot } from './snapshot'

// Class that contains the relevant information the memento will store
export class Originator {
    constructor(private state: string){}

    doSomething(): void {
        console.log(`Prev state: ${this.state}`)
        this.state = crypto.randomBytes(20).toString('hex')
        console.log(`After state: ${this.state}`)

    }

    saveSnapshot(): Snapshot{
        return new ConcreteSnapshot(this.state)
    }

    restore(snapshot: Snapshot): void {
        console.log(`Prev restore state: ${this.state}`)
        this.state  = snapshot.getSnap()
        console.log(`After restore state: ${this.state}`)

    }
}