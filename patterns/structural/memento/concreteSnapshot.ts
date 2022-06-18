import { Snapshot } from "./snapshot";
import dayjs from 'dayjs'

export class ConcreteSnapshot implements Snapshot {
    private date: string
    private state: string

    constructor(state: string){
        this.state = state
        this.date = dayjs().format()
    }
    getSnap(): string {
        return this.state
    }
    getName(): string {
        return `${this.date} / ${this.state}`
    }
    getDate(): string {
        return this.date
    }

}