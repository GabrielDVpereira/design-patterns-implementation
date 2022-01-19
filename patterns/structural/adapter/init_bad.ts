import * as validator from 'email-validator'; 


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
  
   async login(credentials: LoginCredentials ): Promise<void> {
        const isEmailValid = validator.validate(credentials.email); // Deprecado
        if(isEmailValid){
            console.log('login')
        } 
   }

   async signup(credentials: SignUpCredentials): Promise<void> {
        const isEmailValid = validator.validate(credentials.email); // Deprecado
        if(isEmailValid){
            console.log('signup')
        } 
   }
}

const app = new Auth(); 

// ... some auth logic stuff