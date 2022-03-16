import { ITodoServiceLib } from "../../../services";
import { cacheTodoList } from "./cacheTodoList";

class App {
    constructor(private readonly todoService: ITodoServiceLib){}
    main(){
        const list = this.todoService.getList(); 
        console.log(list); 
    }
}

const app = new App(cacheTodoList)
app.main();