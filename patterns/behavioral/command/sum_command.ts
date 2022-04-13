import { Command } from "./command";

export class SumCommand implements Command {
    private readonly valueToAdd: number; 

    constructor(valueToAdd: number){
        this.valueToAdd = valueToAdd; 
    }
    execute(currentValue: number): number {
        return currentValue + this.valueToAdd; 
    }
    undo(currentValue: number): number {
        return currentValue - this.valueToAdd; 
    }
}