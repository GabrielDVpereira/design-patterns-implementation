import { Http, IHttp } from "./config/http";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoServiceLib {
    getList(): Promise<Todo[]>
}

class TodoService implements ITodoServiceLib {

    constructor(private readonly http: IHttp){}
    
    async getList(): Promise<Todo[]> {
        return this.http.get<Todo[]>('/todos');
    }
}

const http = new Http('https://jsonplaceholder.typicode.com'); 
export default new TodoService(http);