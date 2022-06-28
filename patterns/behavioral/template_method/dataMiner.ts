export interface Data<T = any> {
    content: T
}

export abstract class DataMiner<T> {
    miner(filePath: string): Data<T> {
        const blob = this.openFile(filePath)
        let data = this.readData(blob)
        
        if(this.shouldFormat()){
            data  = this.formatData(data)!
        }
        return data
    }

    openFile(path: string): string {
        console.log(`Openning the file ${path}...`)
        return 'file blob' // mocked info, this is just a dummy value to represent a readable info
    }
    abstract readData(blob: string): Data<T>
    abstract formatData(data: Data<T>): Data<T> | void
    shouldFormat(): boolean { return false }  
}