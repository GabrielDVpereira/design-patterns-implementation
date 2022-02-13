import { EmailValidator } from "../adapter/validator";

export interface Validator { 
    execute(data: any): boolean;    
}

export class EmailValidation implements Validator {
    constructor(
        private readonly emailValidator: EmailValidator, 
        private readonly fieldName: string
    ){}


    execute(data: any): boolean {
        const isValid = this.emailValidator.validate(data[this.fieldName])
        return isValid; 
    }
}

export class RequiredFieldValidation implements Validator {
    constructor(
        private readonly fieldName: string
    ){}

    execute(data: any): boolean {
        const exists  = data[this.fieldName]; 
        return !!exists; 
    }
}

export class CompareFieldsValdiation implements Validator {
    constructor(
        private readonly fieldName: string,
        private readonly comparefieldName: string
    ){}

    execute(data: any): boolean {
        const isEqual = data[this.fieldName] === data[this.comparefieldName];
        return isEqual; 
    }
}

export class LengthValidation implements Validator {
    constructor(
        private readonly fieldName: string,
        private readonly fieldLength: number
    ){}

    execute(data: any): boolean {
        return data[this.fieldName].length < this.fieldLength; 
    }
}

export class ValidationComposite implements Validator {
    constructor(private readonly validations: Validator[]){}

    execute(data: any): boolean {
        for(const validation of this.validations){
            const isValid = validation.execute(data); 
            if(!isValid) return false; 
        }
        return true; 
    }

}