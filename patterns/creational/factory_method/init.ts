/**
 * DEFINITION
 * Factory method let's you produce related classes that follow a common interface. 
 * It's important to mantain the single reponsability principle. 
 * Each class will be responsible for only one actor. Then we let the system decide which actor it is
 */

/**
 *  IMPLEMENTATION
 * 1. Create a common interface that all classes will implement. 
 * 2. Create a 'factory', it's a class or a method that will return the interface. So the main app doesn't know about the concrete implementations
 * 3. In the main app, call the factory asking for the type of class you need, then you can execute it's action
 */

import { INotification, INotificationData } from './Notification'; 
import { AlertNotification } from './AlertNotification'; 
import { ErrorNotification } from './ErrorNotification'; 
import { NullNotification } from './NullNotification';

class NotificationHandler {
     private notification: INotification;  
    constructor(private readonly notificationData: INotificationData) {
        this.notification = this.createNotification(); 
    }

    private createNotification(): INotification{
        switch(this.notificationData.type){
            case 'alert':   
                return new AlertNotification(this.notificationData); 
            case 'error': 
                return new ErrorNotification(this.notificationData); 
            default: 
                return new NullNotification()
        }
    }

    handleNotification(){
        this.notification.onOpen(); 
    }
}


const notificationHandler = new NotificationHandler({type: 'error', title: 'test', description: 'test'}); 
notificationHandler.handleNotification(); 