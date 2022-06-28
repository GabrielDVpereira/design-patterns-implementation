import { Data, DataMiner } from "./dataMiner";

type CSVInfo = {
    info: string[]
}

export class CSVDataMiner extends DataMiner<CSVInfo> {

    readData(blob: string): Data<CSVInfo> {
       console.log('reading CSV file...')
        const rawData = {
            content: {
                info: ['csv info formated']
            } 
        } 
        return this.formatData(rawData)
    }

    formatData(data: Data<CSVInfo>) {
        return {
            content: {
                info: ['csv info formated']
            } 
        }  
    }

    shouldFormat(): boolean {
        return true
    }
}