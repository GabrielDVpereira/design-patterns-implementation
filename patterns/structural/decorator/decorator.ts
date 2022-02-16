import { Controller, HttpRequest, HttpResponse } from "./protocols";

export class LoggerDecorator implements Controller {
    constructor(private readonly controller: Controller){}
    
    handle(httpRequest: HttpRequest): HttpResponse {
       const response = this.controller.handle(httpRequest); 
       if(response.statusCode === 500){
           this.log(response); 
       }

       return response; 
    }

    private log(data: HttpResponse): void{
        console.error(data.statusCode)
        console.error(data.body)
    }
}