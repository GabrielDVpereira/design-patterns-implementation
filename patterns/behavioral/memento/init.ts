import { Caretaker } from "./caretaker";
import { Originator } from "./originator";

const originator = new Originator('something')
const caretaker = new Caretaker(originator)
caretaker.backup() 

originator.doSomething()
caretaker.backup() 

originator.doSomething()
caretaker.backup() 

originator.doSomething()

caretaker.showHistory()

caretaker.undo()
caretaker.undo()


