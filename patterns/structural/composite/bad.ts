import * as validator from 'email-validator'; 

interface HttpRequest {
    body?: any; 
    headers?: any; 
}

export type HttpResponse = {
    statusCode: number
    body: any
  }

class LoginController {
    handle(httpRequest: HttpRequest): HttpResponse{
        const body = httpRequest.body; 
        if(body == null && !body.email && !validator.validate(body.email)){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(body == null && !body.password &&  body.password.length < 6){
            return { statusCode: 400, body: 'invalid email'}
        }
        // Login logic stuff
        return { statusCode: 200, body: 'sucess' }
    }
}


class SignupController {
    handle(httpRequest: HttpRequest): HttpResponse{
        const body = httpRequest.body; 
        if(body == null && !body.email && !validator.validate(body.email)){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(body == null && !body.password &&  body.password.length < 6){
            return { statusCode: 400, body: 'invalid email'}
        }

        if(body == null && !body.passwordConfirmation && body.passwordConfirmation !== body.password){
            return { statusCode: 400, body: 'invalid email'}
        }
        
        // Signup logic stuff
        return { statusCode: 200, body: 'sucess' }
    }
}