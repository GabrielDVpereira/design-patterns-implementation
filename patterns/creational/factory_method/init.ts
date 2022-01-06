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