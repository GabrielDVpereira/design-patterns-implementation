export interface INotificationData {
    title: string; 
    description: string; 
    type: string
}

export interface INotification {
    notificationData: INotificationData;
    onOpen(): void; 
}