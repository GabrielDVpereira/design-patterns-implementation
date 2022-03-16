import { VideoConverter } from "./facade";


// main goal of facade is to isolate all the usage of a third party into a single class, so our main does not depend on it
class App {
    main(){
        const convertor = new VideoConverter(); 
        const mp4 = convertor.convert("funny-cats-video.ogg", "mp4"); 
        // ...
    }
}