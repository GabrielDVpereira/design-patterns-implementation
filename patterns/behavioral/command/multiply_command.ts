import { Command } from "./command";

export class MultiplyCommand implements Command {

    private readonly multiplyBy: number; 

    constructor(multiplyBy: number){
        this.multiplyBy = multiplyBy; 
    }

    execute(value: number): number {
        return value * this.multiplyBy; 
    }
    undo(value: number): number {
        return value / this.multiplyBy; 
    }

}