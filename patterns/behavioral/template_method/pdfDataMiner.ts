import { Data, DataMiner } from "./dataMiner";

type PDFInfo = {
    info: string
}

export class CSVDataMiner extends DataMiner<PDFInfo> {
    readData(blob: string): Data<PDFInfo> {
       console.log('reading pdf file...')
        return {
            content: {
                info: 'pdf info'
            } 
        }   
    }
    // we dont need to format data for pdf so we let it empty
    formatData(data: any) {}
}