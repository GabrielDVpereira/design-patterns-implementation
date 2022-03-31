export class AuthHandler implements Handler {
    constructor(private next: Handler){}

    setNext(handler: Handler): void {
        this.next = handler;
    }

    handle(request: IRequest): void {
        if(request.user != null) {
            this.next.handle(request); 
            return; 
        }
        throw new Error("User is not authenticated.");
    }
}