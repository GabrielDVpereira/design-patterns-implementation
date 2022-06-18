import { Originator } from "./originator";
import { Snapshot } from "./snapshot";

export class Caretaker {
    private snapHistory: Snapshot[] = []
    constructor(private originator: Originator){}

    backup(){
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.snapHistory.push(this.originator.saveSnapshot()) // add new snap to the history
    }

    undo(){
        const snap = this.snapHistory.pop()
        if(!snap) return
        console.log(`Caretaker: Restoring state to: ${snap.getName()}`);
        this.originator.restore(snap)
    }
    showHistory(){
        console.log('Caretaker: Here\'s the list of mementos:');
        this.snapHistory.forEach(snap => {
            console.log(snap.getName())
        })
    }
}