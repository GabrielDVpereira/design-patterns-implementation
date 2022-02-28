import { 
        AudioMixer, 
        BitrateReader, 
        CodecFactory, 
        MPEG4CompressionCodec, 
        OggCompressionCodec, 
        VideoFile,
        Compression
    } from './third-party';

const FORMATS = {
    MP4: 'mp4', 
    // ... other formats
}

export class VideoConverter {
    convert(filename: string, format: string){
        const file = new VideoFile(filename); 
        const source =  CodecFactory.extract(file); 
        let destinationCodec = this.getDestinationByFormat(format); 
        const result =  BitrateReader.read(filename, destinationCodec); 
        return result; 
        
    }

    private getDestinationByFormat(format: string): Compression {
        return format === FORMATS.MP4 ? 
            new MPEG4CompressionCodec() : 
            new OggCompressionCodec(); 
    }
}