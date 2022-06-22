import { Listener } from "./listener";
import { PriceData } from "./pricesManager";

export class IbmStock implements Listener<PriceData> {
    private data: PriceData = {
        ibmPrice: 0,
        applePrice: 0,
        amazonPrice: 0
    }; 

    update(data: PriceData): void {
        console.log(`Got new data from IbmStock! ${JSON.stringify(data)}`)
        if(this.data.ibmPrice !== data.ibmPrice)
            this.triggerStockEmails()
        this.data = {...data}
    }

    triggerStockEmails(){
        console.log(`Warning IBM inverstors!`)
    }
    
}