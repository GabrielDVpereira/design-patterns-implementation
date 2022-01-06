import { INotification, INotificationData } from './Notification'; 

export class NullNotification implements INotification {
    notificationData: INotificationData = {} as INotificationData;  
    onOpen(): void {
    }   
}