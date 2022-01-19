import { EmailValidatorAdapter } from './emailValidator'; 
import { EmailValidator } from './validator'

type LoginCredentials = {
    email: string, 
    password: string, 
}

type SignUpCredentials = {
    email: string, 
    password: string, 
    passwordConfirmation: string, 
}

class Auth {
    constructor(
        private readonly emailValidator: EmailValidator
    ){}

   async login(credentials: LoginCredentials ): Promise<void> {
        const isEmailValid = this.emailValidator.validate(credentials.email);
        if(isEmailValid){
            console.log('login')
        } 
   }

   async signup(credentials: SignUpCredentials){
        const isEmailValid = this.emailValidator.validate(credentials.email);
        if(isEmailValid){
            console.log('signup')
        } 
   }
}

const validator = new EmailValidatorAdapter(); 
const app = new Auth(validator); 

// ... some auth logic stuff