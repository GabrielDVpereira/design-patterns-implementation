class PermissionHandler implements Handler {
    constructor(private next: Handler){}

    setNext(handler: Handler): void {
        this.next = handler;
    }

    handle(request: IRequest): void {
        if(request.permission == 'admin') {
            this.next.handle(request); 
            return; 
        }
        throw new Error("User does not have permission to perform this action.");
    }
}