import { ITodoServiceLib, Todo, todoService } from "../../../services";


const MINUTES_10 = 60 * 10 * 1000;

class CacheTodoList implements ITodoServiceLib {
    lastCacheTimeInMiliseconds?: number; 
    listCahce?: Todo[]; 

    constructor(private readonly todoService: ITodoServiceLib){}
    async getList(): Promise<Todo[]> {
        if(this.needReset(Date.now()) || !this.listCahce){
            this.lastCacheTimeInMiliseconds = Date.now()
            this.listCahce = await this.todoService.getList()
        }
        return this.listCahce;
    }

    needReset(requestTimeInMiliseconds: number): boolean {
        if(!this.lastCacheTimeInMiliseconds) return true; 
        return (requestTimeInMiliseconds - this.lastCacheTimeInMiliseconds) > MINUTES_10;
    }
}

const cacheTodoList =  new CacheTodoList(todoService); 
export { cacheTodoList }