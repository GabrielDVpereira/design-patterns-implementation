// Mock up of a third party library that the main aplication will use 
// methods implementation are not important

export interface Compression {
    // not important
}

export class VideoFile {
    constructor(private readonly filename: string){}
}

export class OggCompressionCodec implements Compression {

}

export class MPEG4CompressionCodec implements Compression{

}

export class CodecFactory {
    static extract(file: VideoFile){}
}

export class BitrateReader {
    static read(filename: string, sourceCodec: Compression){}
    static convert(buffer: string, destinationCodec: Compression){}
}

export class AudioMixer {
    fix(){}
}
