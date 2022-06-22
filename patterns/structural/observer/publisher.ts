import { Listener } from "./listener";

export interface Publisher {
    notifyListeners(): void; 
    subscribe(listener: Listener | Listener[]): void;
    unsubscribe(listener: Listener | Listener[]): void;
}