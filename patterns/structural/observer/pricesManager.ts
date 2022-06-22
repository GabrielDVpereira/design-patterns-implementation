import { Listener } from "./listener";
import { Publisher } from "./publisher";

export type PriceData = {
    ibmPrice: number; 
    applePrice: number;
    amazonPrice: number;
}

export class PricesManager implements Publisher {
    private listeners: Listener<PriceData>[] = []

    private priceData: PriceData = {
        ibmPrice: 0.00, 
        applePrice:0.00,
        amazonPrice: 0.00
    }


    setIbmPrice(price: number): void {
        this.priceData.ibmPrice = price
        this.notifyListeners()
    }

    setApplePrice(price: number): void {
        this.priceData.applePrice = price
        this.notifyListeners()
    }

    setAmazonPrice(price: number): void {
        this.priceData.amazonPrice = price
        this.notifyListeners()
    }

    notifyListeners(): void {
        this.listeners.forEach(listener => {
            listener.update(this.priceData)
        })
    }
    subscribe(listener: Listener | Listener[]): void {
        if (Array.isArray(listener)){
            this.listeners = [...this.listeners, ...listener]
            return;
        }
        this.listeners.push(listener as Listener)
    }
    unsubscribe(listener: Listener | Listener[]): void {
        if (Array.isArray(listener)){
            this.listeners = this.listeners.filter(_listener => !listener.includes(_listener))
            return;
        }
        this.listeners = this.listeners.filter(_listener => _listener !== listener)
    }
}