import { LoginController, SignupController } from "./controllers";
import { LoggerDecorator } from "./decorator";

const signupController = new SignupController(); 
const loginController = new LoginController(); 
const logControllerDecorator = new LoggerDecorator(loginController); 


console.log(signupController.handle({})); 
console.log(logControllerDecorator.handle({})); 
