import * as validator from 'email-validator'; 

import { HttpRequest, HttpResponse } from './protocols';

class LoginController {
    handle(httpRequest: HttpRequest): HttpResponse{
        const body = httpRequest.body; 
        if(!this.isEmailValid(body)){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(!this.isPasswordValid(body)){
            return { statusCode: 400, body: 'invalid email'}
        }
        // Login logic stuff
        return { statusCode: 200, body: 'sucess' }
    }

    private isEmailValid(body: any){
        return body == null && !body.email && !validator.validate(body.email);
    }
    private isPasswordValid(body: any){
        return body == null && !body.password && body.password.length < 6;
    }
    
}


class SignupController {
    handle(httpRequest: HttpRequest): HttpResponse{
        const body = httpRequest.body; 
        if(this.isEmailValid(body)){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(this.isPasswordValid(body)){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(this.isConfirmationPasswordValid(body)){
            return { statusCode: 400, body: 'invalid email'}
        }
        
        // Signup logic stuff
        return { statusCode: 200, body: 'sucess' }
    }

    private isEmailValid(body: any){
        return !body?.email && !validator?.validate(body.email);
    }
    private isPasswordValid(body: any){
        return body?.password && body?.password?.length < 6;
    }

    private isConfirmationPasswordValid(body: any){
        return  body?.passwordConfirmation === body?.password;
    }
}