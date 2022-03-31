const MIN_CREDIT_REQUIRED = 100; 

export class CreditHandler implements Handler {
    constructor(private next: Handler){}

    setNext(handler: Handler): void {
        this.next = handler;
    }

    handle(request: IRequest): void {
       
        if(request.credit >= MIN_CREDIT_REQUIRED) {
            this.next.handle(request); 
            return; 
        }
        throw new Error("User does not have the min amount of credit.");
    }
}