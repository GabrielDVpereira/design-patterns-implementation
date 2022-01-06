import { INotification, INotificationData } from './Notification'; 

export class ErrorNotification implements INotification {
    notificationData: INotificationData; 
    constructor(notificationData: INotificationData){
        this.notificationData = notificationData;
    }

    onOpen(): void {
        this.logError(this.notificationData.title);
    }
    
    private logError(message: string): void {
        console.error(`Error! ${message}`)
    }
    
}