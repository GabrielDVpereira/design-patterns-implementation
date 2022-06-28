import { Data, DataMiner } from "./dataMiner";

type DocxInfo = {
    info: number
}

export class DocxDataMiner extends DataMiner<DocxInfo> {

    readData(blob: string): Data<DocxInfo> {
       console.log('reading Docx file...')
        const data = {
            content: {
                info: 100
            } 
        } 
        return data
    }
    // we dont need to format data for pdf so we let it empty
    formatData(data: any) {}
}