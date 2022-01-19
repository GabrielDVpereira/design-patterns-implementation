import { EmailValidator } from "./validator";
import * as validator from 'email-validator'; 

export class EmailValidatorAdapter implements EmailValidator {
    validate(email: string): boolean {
        return validator.validate(email);
    }
}