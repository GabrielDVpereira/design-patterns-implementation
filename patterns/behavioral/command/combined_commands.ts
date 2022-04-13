import { Command } from "./command";

export class CombinedCommands implements Command {
    private readonly commands: Command[]; 
    constructor(commands: Command[]){
        this.commands = commands; 
    }
    execute(value: number): number {
       let total: number = value; 
       for(const command of this.commands){
        total = command.execute(total); 
       }
       return total; 
    }
    undo(value: number): number {
       let total: number = value; 
       for(const command of this.commands){
        total = command.undo(total); 
       }
       return total; 
    }
}