import { CombinedCommands } from "./combined_commands";
import { Command } from "./command";
import { MultiplyCommand } from "./multiply_command";
import { SumCommand } from "./sum_command";

class Calculator {
    value: number = 0 ; 
    history: Command[] = []; 

    executeCommand(command: Command){
        this.value = command.execute(this.value); 
        this.history.push(command); 
    }
    undo(){
        const command = this.history.pop()
        if(!command) return;
        this.value = command.undo(this.value); 
    }
}

const calculator = new Calculator()

// calculator.executeCommand(new SumCommand(10)); 
// calculator.executeCommand(new MultiplyCommand(2)); 
// console.log(calculator.value);

const sumCommand = new SumCommand(20)
const multiplyCommand = new MultiplyCommand(5); 

calculator.executeCommand(new CombinedCommands([sumCommand, multiplyCommand]))
console.log(calculator.value)