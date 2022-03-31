import { Controller, HttpRequest, HttpResponse } from "./protocols";

export class LoginController implements Controller{
    handle(httpRequest: HttpRequest): HttpResponse {
        // ... controller stuff
        return { statusCode: 200, body: 'sucess' }
    }    
}


export class SignupController implements Controller{
    handle(httpRequest: HttpRequest): HttpResponse {
        // Signup logic stuff
        return { statusCode: 200, body: 'sucess' }
    }
}