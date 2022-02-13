import { EmailValidatorAdapter } from "../adapter/emailValidator";
import { CompareFieldsValdiation, EmailValidation, LengthValidation, RequiredFieldValidation, ValidationComposite, Validator } from "./ultimate";

interface HttpRequest {
    body?: any; 
    headers?: any; 
}

export type HttpResponse = {
    statusCode: number
    body: any
  }

class LoginController {
    constructor(private readonly validator: Validator){}
    handle(httpRequest: HttpRequest): HttpResponse{
        const body = httpRequest.body; 
        
        const isBodyValid = this.validator.execute(body); 
        if(!isBodyValid) return { statusCode: 400, body: 'bad request' }

        return { statusCode: 200, body: 'sucess' }
    }    
}


class SignupController {
    constructor(private readonly validator: Validator){}
    handle(httpRequest: HttpRequest): HttpResponse {

        const body = httpRequest.body; 
        const isBodyValid = this.validator.execute(body); 

        if(!isBodyValid) return { statusCode: 400, body: 'bad request' }

        // Signup logic stuff
        return { statusCode: 200, body: 'sucess' }
    }
}


// required fields validation
const fields = ['email', 'password', 'confirmPassword']; 
const requiredFieldsValidation : Validator[] = []; 

for(const field of fields){
    requiredFieldsValidation.push(new RequiredFieldValidation(field));
}

// Email validation
const emailValidationAdapter = new EmailValidatorAdapter();
const emialValidation = new EmailValidation(emailValidationAdapter, 'email');

// Confirm password validation
const compareFieldsValidation = new CompareFieldsValdiation('password', 'confirmPassword'); 

// password validation
const passwordValidation = new LengthValidation('password', 6); 

// login validator composite
const loginValidationComposite = new ValidationComposite([emialValidation,passwordValidation, ...requiredFieldsValidation]);

// Login controller
const loginController = new LoginController(loginValidationComposite);
loginController.handle({}); 

// login validator composite
const signupValidationComposite = new ValidationComposite([
    emialValidation,
    passwordValidation,
    compareFieldsValidation,
    ...requiredFieldsValidation
]);

// signup controller
const signupController = new SignupController(signupValidationComposite);
signupController.handle({}); 