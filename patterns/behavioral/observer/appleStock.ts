import { Listener } from "./listener";
import { PriceData } from "./pricesManager";

export class AppleStock implements Listener<PriceData> {
    private data: PriceData = {
        ibmPrice: 0,
        applePrice: 0,
        amazonPrice: 0
    }; 

    update(data: PriceData): void {
        console.log(`Got new data from AppleStock! ${JSON.stringify(data)}`)
        if(this.data.applePrice !== data.applePrice)
            this.triggerStockEmails()
        this.data = {...data}
    }

    triggerStockEmails(){
        console.log(`Warning Apple inverstors!`)
    }
    
}