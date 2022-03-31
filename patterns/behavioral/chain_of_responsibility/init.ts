import { AuthHandler } from "./auth_handler";
import { CreditHandler } from "./credit_handler";
import { NullHandler } from "./nullHandler";

class App {
    constructor(private readonly chainVerificationHandler: Handler){}

    execute(request: IRequest): void{
        try {
            this.chainVerificationHandler.handle(request); 
            // ... any other logic
        } catch(error){
            if(error instanceof Error){
                console.error(error.message)
                return; 
            }
            console.error(error)
        }   
    }
}

const fakeRequest: IRequest = {
    user:{},
    credit: 200,
    permission: 'admin'
}

const nullHandler = new NullHandler(); 
const permissionHandler = new PermissionHandler(nullHandler)
const creditHandler = new CreditHandler(permissionHandler)
const authHandler = new AuthHandler(creditHandler)

const app = new App(authHandler)
app.execute(fakeRequest)