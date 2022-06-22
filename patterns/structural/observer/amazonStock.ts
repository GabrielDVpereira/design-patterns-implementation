import { Listener } from "./listener";
import { PriceData } from "./pricesManager";

export class AmazonStock implements Listener<PriceData> {
    private data: PriceData = {
        ibmPrice: 0,
        applePrice: 0,
        amazonPrice: 0
    }; 

    update(data: PriceData): void {
        console.log(`Got new data from AmazonStock! ${JSON.stringify(data)}`)
        if(this.data.amazonPrice !== data.amazonPrice)
            this.triggerStockEmails()
        this.data = {...data}
    }

    triggerStockEmails(){
        console.log(`Warning Amazon inverstors!`)
    }
    
}