import { INotification, INotificationData } from './Notification'; 

export class AlertNotification implements INotification {
    notificationData: INotificationData; 
    constructor(notificationData: INotificationData){
        this.notificationData = notificationData;
    }

    onOpen(): void {
        this.alert(this.notificationData.title);
    }
    
    private alert(message: string): void {
        console.warn(`Alert! ${message}`)
    }
    
}